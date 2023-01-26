module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.tsx',
          '.ios.ts',
          '.android.tsx',
          '.android.ts',
          '.electron.tsx',
          '.electron.ts',
          '.native.tsx',
          '.native.ts',
          '.web.tsx',
          '.web.ts',
          '.ios.jsx',
          '.ios.js',
          '.android.jsx',
          '.android.js',
          '.electron.jsx',
          '.electron.js',
          '.native.jsx',
          '.native.js',
          '.web.jsx',
          '.web.js',
          '.tsx',
          '.ts',
          '.jsx',
          '.js',
          '.json',
        ],
      },
    ],
  ],
}
