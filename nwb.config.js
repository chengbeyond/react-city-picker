module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactCityPicker',
      externals: {
        react: 'React'
      }
    }
  }
}
