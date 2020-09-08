import devEnv from './dev';

const env = ((): any => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return devEnv;
      break;
    // case 'prod':
    //   module.exports = require('./prod');
    //   break;
    default:
      console.error(`Mode doesn't exists!!`);
  }
  return {};
})();
export { env };
