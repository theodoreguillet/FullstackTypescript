import path from 'path';

const IS_DEV = process.env.NODE_ENV !== 'production';

const findUp = require('find-up');

if (IS_DEV) {
  require('dotenv').config({ path: findUp.sync('.env') });
}

// const { version: VERSION } = require(findUp.sync('package.json'));
const VERSION = '1.1.0';

// server
const SERVER_PORT = process.env.PORT || 3000;
const WEBPACK_PORT = 8085; // For dev environment only

// paths
const staticsPath = IS_DEV ? path.join(process.cwd(), 'dist', 'statics') : path.join(__dirname, '../statics');
const assetsPath  = IS_DEV ? path.join(process.cwd(), 'assets', 'server') : path.join(__dirname, '../assets');
const viewPath = IS_DEV ? path.join(process.cwd(), 'views') : path.join(__dirname, '../views');

export {
  IS_DEV,
  VERSION,
  SERVER_PORT,
  WEBPACK_PORT,
  staticsPath,
  assetsPath,
  viewPath
};
