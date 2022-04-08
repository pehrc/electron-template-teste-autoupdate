import path from 'path';

export const getAppUrl = (): string =>
  process.env.NODE_ENV === 'development'
    ? `file://${path.join(__dirname, '..', 'react', 'index.html')}`
    : 'http://localhost:8080';

export const getSplashUrl = (): string =>
  `file://${path.join(__dirname, '..', 'react', 'splash.html')}`;
