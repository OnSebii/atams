const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, '../server/public'),
  productionSourceMap: false,
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'public/service-worker.js',
    },
    manifestOptions: {
      name: 'Automatic Traffic And Monitoring System',
      short_name: 'atams',
      theme_color: '#993955',
      background_color: '#A3C3D9',
      icons: [
        {
          src: './img/icons/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: './img/icons/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: './img/icons/android-chrome-maskable-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'maskable',
        },
        {
          src: './img/icons/android-chrome-maskable-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
        {
          src: './img/icons/apple-touch-icon-60x60.png',
          sizes: '60x60',
          type: 'image/png',
        },
        {
          src: './img/icons/apple-touch-icon-76x76.png',
          sizes: '76x76',
          type: 'image/png',
        },
        {
          src: './img/icons/apple-touch-icon-120x120.png',
          sizes: '120x120',
          type: 'image/png',
        },
        {
          src: './img/icons/apple-touch-icon-152x152.png',
          sizes: '152x152',
          type: 'image/png',
        },
        {
          src: './img/icons/apple-touch-icon-180x180.png',
          sizes: '180x180',
          type: 'image/png',
        },
        {
          src: './img/icons/apple-touch-icon.png',
          sizes: '180x180',
          type: 'image/png',
        },
        {
          src: './img/icons/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png',
        },
        {
          src: './img/icons/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
        {
          src: './img/icons/msapplication-icon-144x144.png',
          sizes: '144x144',
          type: 'image/png',
        },
        {
          src: './img/icons/mstile-150x150.png',
          sizes: '150x150',
          type: 'image/png',
        },
      ],
    },
  },
  transpileDependencies: ['vuetify'],
};
