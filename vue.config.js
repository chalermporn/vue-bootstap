// eslint-disable-next-line @typescript-eslint/no-var-requires
const BootstrapVueLoader = require('bootstrap-vue-loader')
module.exports = {
  transpileDependencies: [
    'axios',
    'core-js',
    'register-service-worker',
    'vue-class-component',
    'vue-property-decorator',
    'vue-roller',
    'vue-router',
    'vue',
    'vuex-class',
    'vuex'
  ],
  configureWebpack: {
    plugins: [new BootstrapVueLoader()]
  }
}
