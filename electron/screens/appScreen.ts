import { app, BrowserWindow, Menu } from 'electron';
import path from 'path';
import { CreateAppMenu } from '../utils/createAppMenu';
import {
  createContextMenuDefault,
  createContextMenuTextSelected,
} from '../utils/createContextMenu';
import { getAppUrl } from '../utils/urlUtils';

interface ICreateAppScreen {
  onClose: () => void;
  onFinish: () => void;
}

const INITIAL_WIDTH = 1100;
const INITIAL_HEIGHT = 700;

const getIconPath = () => {
  const assetsPath = app.isPackaged
    ? path.join(process.resourcesPath, 'assets')
    : path.join(__dirname, '../../assets');

  return path.join(assetsPath, 'icon.png');
};

export const createAppScreen = ({
  onClose,
  onFinish,
}: ICreateAppScreen): BrowserWindow => {
  const mainWindow = new BrowserWindow({
    width: INITIAL_WIDTH,
    height: INITIAL_HEIGHT,
    minWidth: INITIAL_WIDTH,
    minHeight: INITIAL_HEIGHT,
    focusable: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    title: 'Wallcob',
    icon: getIconPath(),
    show: false,
  });

  mainWindow.setMenu(CreateAppMenu());

  const appUrl = getAppUrl();

  mainWindow.loadURL(appUrl);

  mainWindow.on('close', onClose);

  mainWindow.webContents.on('context-menu', (_, props) => {
    let contextMenu: Menu;

    if (props.selectionText) {
      contextMenu = createContextMenuTextSelected(mainWindow, props);
    } else {
      contextMenu = createContextMenuDefault(mainWindow, props);
    }

    contextMenu.popup();
  });

  mainWindow.webContents.on('did-finish-load', () => {
    onFinish();

    mainWindow.show();
  });

  return mainWindow;
};
