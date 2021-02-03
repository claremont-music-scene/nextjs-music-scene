const withOptimizedImages = require("next-optimized-images");
const path = require("path");

const compose = require('next-compose') // makes it easier to manage plugins in next config; not required if you'd like to avoid this dependency

module.exports = compose([
  [withOptimizedImages, {
    responsive: {
      adapter: require('responsive-loader/sharp') // to use sharp with responsive loader; default is jimp if you'd like to switch to that
    }
  }],
  {
    webpack: (config) => {
      config.resolve.alias.images = path.join(__dirname, "public/images"); // tells optimized images / responsive loader where to find images
      return config
    }
  }
])
