// Dependencies
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// Environment
const isDevelopment = process.env.NODE_ENV !== 'production';

export default () => {
  const rules = [
    {
      test: /\.(js|jsx)$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }
  ];

  if (!isDevelopment) {
    rules.push({
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 1,
            localIdentName: '[name]__[local]_[hash:base64]'
          }
        },
        'sass-loader',
      ]
    });
  } else {
    rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 1,
            localIdentName: '[name]__[local]_[hash:base64]',
            sourceMap: true
          }
        },
        {
          loader: 'sass-loader'
        }
      ]
    });
  }

  return {
    rules
  };
};
