import { BrowserWindow } from 'electron';
import { getSplashUrl } from '../utils/urlUtils';

interface ICreateSplashScreen {
  onClose: () => void;
}

export const createSplashScreen = ({
  onClose,
}: ICreateSplashScreen): BrowserWindow => {
  const splashScreen = new BrowserWindow({
    width: 500,
    height: 450,
    frame: false,
    transparent: true,
    resizable: false,
    backgroundColor: '#EDF2F4',
  });

  const splashUrl = getSplashUrl();

  console.log('splashUrl', splashUrl);

  splashScreen.loadURL(splashUrl);

  splashScreen.on('close', onClose);

  splashScreen.webContents.on('did-finish-load', () => {
    splashScreen.show();
  });

  return splashScreen;
};
