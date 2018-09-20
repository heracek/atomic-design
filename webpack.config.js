// const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['to-string-loader', 'css-loader'],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
          },
        ],
      },
    ],
  },
};
