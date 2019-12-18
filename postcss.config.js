module.exports = {
  plugins: {
    "postcss-import": {
      from: "styles/index.css"
    },

    "postcss-preset-env": {
      stage: 0
    },

    "cssnano": {
      preset: [
        "default",
        {
          discardComments: {
            removeAll: true
          }
        }
      ]
    }
  }
};
