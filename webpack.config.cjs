const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const webpack = require('webpack');
const config = {
  mode: 'development',

  //设置文件入口
  entry: {
    'pc-index': './src/pages/pc/index/pc-index.js',
    'm-index': './src/pages/m/index/m-index.js'
  },
  //设置文件出口
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './pages/[name]/index.js',
    clean: true
  },

  //添加补丁
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, './src/pages/pc/index/pc-index.html'),
    filename: path.resolve(__dirname, './dist/pages/pc-index/index.html'),
    chunks: ['pc-index'],
    useCdn: process.env.NODE_ENV === 'production' // 示例条件

  }),

  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, './src/pages/m/index/m-index.html'),
    filename: path.resolve(__dirname, './dist/pages/m-index/index.html'),
    chunks: ['m-index'],
    useCdn: process.env.NODE_ENV === 'production' // 示例条件
  }),

  new MiniCssExtractPlugin({
    filename: './pages/[name]/index.css'
  }),

  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  })],

  //添加加载器
  module: {
    rules: [
      //单独打包css文件
      {
        test: /\.css$/i,
        use: [process.env.NODE_ENV === 'development' ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader"],
      },
      //单独打包less文件
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          process.env.NODE_ENV === 'development' ? "style-loader" : MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
        ],
      },
      //打包图片文件，js文件需要单独引用
      {
        test: /\.(png|jpg|gif|svg|jpeg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/imgs/[hash][ext][query]'
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            sources: {
              list: [
                {
                  tag: 'img',
                  attribute: 'src',
                  type: 'src',
                },
                {
                  tag: 'img',
                  attribute: 'srcset',
                  type: 'srcset',
                },
                {
                  tag: 'link',
                  attribute: 'href',
                  type: 'src',
                  filter: (tag, attribute, attributes) => {
                    return attributes.some(attr =>
                      attr.name === 'rel' && attr.value === 'icon'
                    );
                  }
                }
              ]
            },
            esModule: false,
          }
        }
      },
    ],
  },


  optimization: {
    //压缩css文件大小
    minimizer: [
      // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
      `...`,
      new CssMinimizerPlugin(),
    ],

    //代码分割
    splitChunks: {
      chunks: 'all',    //所有模块动态非动态移入的都分割分析
      cacheGroups: {      //分隔组
        common: {     //抽取公共模块
          minSize: 0,     //抽取chunk最小字节
          minChunks: 2,      //最小引用数
          reuseExistingChunk: true, //当前chunk包含已从bundle中拆分出的模块，则被重用
          name(module, chunks, cacheGroupKey) {
            const allChunksNames = chunks.map((item) => item.name).join('~') //模块名1~2
            return `./js/${allChunksNames}` //输出到dist目录下位置
          }
        },
      },
    },
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
};

if (process.env.NODE_ENV === 'development') {
  config.devtool = 'inline-source-map'
}

if (process.env.NODE_ENV === 'production') {
  //外部扩展（防止import被webpack打包）
  config.externals = {
    // 'key': 'value'
    //'key'为import from 语句后面的字符串，即为引用的地址
    //'value'为留在原地的全局变量，最好和cdn在全局暴露的变量一致
    //例如'axios':'axios'
  }
}

module.exports = config
