var path = require('path');
var antlr4Plugin = require('antlr4-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
      path: __dirname,
      filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  node: {
    module: "empty",
    net: "empty",
    fs: "empty"
  },
  plugins: [
    antlr4Plugin({
      grammar: 'Artling.g4',
      options: {
        o: 'src/generated/', //output directory
        grammarLevel: {
          language: 'JavaScript' //generated code language
        },
        flags: ['visitor', 'listener']
      }
    })
  ]

}
