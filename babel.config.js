module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    "plugins": [
      ["module-resolver", {
        "root": ["./src"],
        "alias": {
          "@screens": "./src/screens",
          "@components": "./src/components",
          "@routes": "./src/routes",
          "@utils": "./src/utils",
          "@storage": "./src/storage",
          "@assets": "./src/assets",
        }
      }]
    ]
  };
};
