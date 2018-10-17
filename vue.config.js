// vue.config.js

module.exports = {
  baseUrl:'./',
  devServer: {
    port: 8088,
    // host: 'localhost',
    // https: false,
    open: true,
    proxy: {
    	'/test01':{
        target: 'http://10.198.13.81:8010',
      },
    	'/test02': {
        target: 'http://10.198.13.81:8020',
        ws: true,
        changeOrigin: true
      },
    }
  }

  // outputDir:process.env.outputDir
}

// npm run serve时会把process.env.NODE_ENV设置为‘development’；

// npm run build 时会把process.env.NODE_ENV设置为‘production’；

// 此时只要根据process.env.NODE_ENV设置不同请求url就可以很简单的区分出本地和线上环境。

// module.exports = {
//   baseUrl: process.env.NODE_ENV  === 'production'
//     ? '/production-sub-path/'
//     : '/',
//    devServer: {
//     proxy: 'http://localhost:8090'
//   }
// }

 // "release":"vue-cli-service build --mode release",