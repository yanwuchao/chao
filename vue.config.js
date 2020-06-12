const path = require('path')

module.exports = {
    devServer:{
        port:521,
    },
  // 起别名
  configureWebpack:{
      resolve:{
        alias:{
          '@':path.resolve('./src'),
          '@views':path.resolve('./src/views')
        }
      }
    }
}