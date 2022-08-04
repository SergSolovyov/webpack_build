const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const nodemon = require('nodemon');
const path = require('path');

// webpack' compilation from our webpack.config.js file
const compiler = webpack(webpackConfig);

// start compilation
compiler.run((err) => {
  if (err) {
    console.error('Compilation failed: ', err)
  }

  compiler.watch({}, err => {
    if (err) {
      console.error('Compilation failed: ', err)
    }
    console.log('Compilation was successfully :)')
  })

  // restart our server before chang
  nodemon({
    // run our script
    script: path.resolve(__dirname, '../dist/server/server.js'),
    // watch for directory
    watch: [
      path.resolve(__dirname, '../dist/server'),
      path.resolve(__dirname, '../dist/client'),
    ],
  })
})
