module.exports = (api) => {
  api.cache.forever();
  return {
    presets: [
      [
        'module:metro-react-native-babel-preset',
        {
          useTransformReactJSXExperimental: true
        }
      ],
      ['@babel/preset-react', { runtime: 'automatic' }]
    ],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '^~/(.+)': './js/\\1'
          }
        }
      ]
      // '@babel/plugin-transform-runtime',
      // ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }]
    ]
  };
};
