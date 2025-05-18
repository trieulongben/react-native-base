module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@contexts': './src/contexts',
          '@hooks': './src/hooks',
          '@navigation': './src/navigation/',
          '@services': './src/services',
          '@type': './src/type',
          '@utils': './src/utils',
          '@configs': './src/configs',
          '@stores': './src/stores',
          '@preload': './src/preload',
        },
      },
    ],
  ],
};
