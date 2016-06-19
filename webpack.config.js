module.exports = {
  entry: './src/index.js',
  output: {
    path:     './dist/',
    filename: 'bundle.js'
  },
  watch: true,
  module: {
    loaders: [
      {
        test:    /\.js$/,
        exclude: /(node_modules)/,
        loader:  'babel?presets[]=react,presets[]=es2015'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
