module.exports = {
  "publicPath": "/",
  "devServer": {
    "open": true,
    "host": "127.0.0.1",
    "port": 3000
  },
  "pwa": {
    "appleMobileWebAppCapable": "yes",
    "appleMobileWebAppStatusBarStyle": "black",
    "workboxPluginMode": "InjectManifest",
    "workboxOptions": {
      "swSrc": "src/service-worker.js"
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}