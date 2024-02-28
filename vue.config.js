const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
export default defineConfig({
    server: {
        proxy: {
          '/api': {
            target: 'http://192.168.17.169:8080',//后端服务器
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
          }
        }
      }
})