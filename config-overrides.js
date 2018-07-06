const path = require('path');
const {injectBabelPlugin} = require('react-app-rewired');
// const rewireLess = require('react-app-rewire-less');

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}
module.exports = function override(config, env) {
  config.resolve.alias = {
    '@': resolve('src')
  }
  return config;
}
module.exports = function override(config, env) {
  // do stuff with the webpack config...
  config = injectBabelPlugin([
    'import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css'
    }
  ], config);
  return config;
};