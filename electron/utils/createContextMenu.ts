import { Menu, BrowserWindow } from 'electron';

export const createContextMenuDefault = (
  mainWindow: BrowserWindow,
  props: Electron.ContextMenuParams,
): Menu =>
  Menu.buildFromTemplate([
    {
      label: 'Voltar',
      click: () => {
        mainWindow.webContents.goBack();
      },
      accelerator: 'Alt+Left',
      enabled: mainWindow.webContents.canGoBack(),
    },
    {
      label: 'Próximo',
      click: () => {
        mainWindow.webContents.goForward();
      },
      accelerator: 'Alt+Left',
      enabled: mainWindow.webContents.canGoForward(),
    },
    { type: 'separator' },
    { label: 'Recarregar', role: 'reload', accelerator: 'CommandOrControl+R' },
    { type: 'separator' },
    {
      label: 'Inspecionar',
      click: () => {
        mainWindow.webContents.inspectElement(props.x, props.y);
      },
      accelerator: 'Shift+CommandOrControl+I',
    },
  ]);

export const createContextMenuTextSelected = (
  mainWindow: BrowserWindow,
  props: Electron.ContextMenuParams,
): Menu =>
  Menu.buildFromTemplate([
    {
      label: 'Copiar',
      role: 'copy',
      accelerator: 'CommandOrControl+C',
      enabled: props.editFlags.canCopy,
    },
    { type: 'separator' },
    {
      label: 'Inspecionar',
      click: () => {
        mainWindow.webContents.inspectElement(props.x, props.y);
      },
      accelerator: 'Shift+CommandOrControl+I',
    },
  ]);
