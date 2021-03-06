const path = require('path');
const isDev = (process.env.NODE_ENV !== 'production');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const globImporter = require('node-sass-glob-importer');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    custom_gin: ['./styles/custom_gin.scss'],
    custom_gin_init: ['./js/custom_gin_init.js'],
    custom_gin_toolbar: ['./js/custom_gin_toolbar.js', './styles/custom_gin_toolbar.scss'],
    custom_gin_horizontal_toolbar: ['./styles/custom_gin_horizontal_toolbar.scss'],
    custom_gin_classic_toolbar: ['./styles/custom_gin_classic_toolbar.scss'],
    custom_gin_accent: ['./js/custom_gin_accent.js','./styles/custom_gin_accent.scss'],
    custom_gin_settings: ['./js/custom_gin_settings.js'],
    custom_gin_dialog: ['./styles/custom_gin_dialog.scss'],
    custom_gin_ckeditor: ['./js/custom_gin_ckeditor.js', './styles/custom_gin_ckeditor.scss'],
  },
  output: {
    devtoolLineToLine: true,
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: 'js/async/[name].chunk.js',
    pathinfo: true,
    filename: 'js/[name].js',
    publicPath: '../',
  },
  module: {
    rules: [{
        test: /\.(config.js)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath: './'
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        exclude: /sprite\.svg$/,
        use: [{
            loader: 'file-loader',
            options: {
              name: 'media/[name].[ext]?[hash]',
            },
          },
        ],
      },
      {
        test: /sprite\.svg$/,
        use: [{
            loader: 'file-loader',
            options: {
              name: 'media/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /modernizrrc\.js$/,
        loader: 'expose-loader?Modernizr!webpack-modernizr-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              name: '[name].[ext]?[hash]',
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDev,
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()],
              sourceMap: isDev,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDev,
              sassOptions: {
                importer: globImporter()
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
    extensions: ['.js', '.json'],
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    new FixStyleOnlyEntriesPlugin(),
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname),
    }),
    new SVGSpritemapPlugin(path.resolve(__dirname, 'media/icons/**/*.svg'), {
      output: {
        filename: './media/sprite.svg',
        svg: {
          sizes: false
        }
      },
      sprite: {
        prefix: false,
        gutter: 0,
        generate: {
          title: false,
          symbol: true,
          use: true,
          view: '-view'
        }
      },
      styles: {
        filename: path.resolve(__dirname, 'styles/helpers/_svg-sprite.scss'),
        // Fragment does not yet work with Firefox with mask-image.
        // format: 'fragment'
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ],
  watchOptions: {
    aggregateTimeout: 300,
  }
};
