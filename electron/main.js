import { app } from 'electron';
import { createAppScreen } from './screens/appScreen';
import { createSplashScreen } from './screens/splashScreen';

let splash = null;
let main = null;

const createLoadingWindow = () => {
  splash = createSplashScreen({
    onClose: () => {
      splash = null;
    },
  });
};

const createMainWindow = () => {
  main = createAppScreen({
    onClose: () => {
      main = null;
    },
    onFinish: () => {
      if (splash) {
        splash.destroy();
        splash = null;
      }
    },
  });
};

app.on('ready', () => {
  createLoadingWindow();

  setTimeout(() => {
    createMainWindow();
  }, 20000);
});

app.on('activate', () => {
  if (main === null) {
    createMainWindow();
  }
});
