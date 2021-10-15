const path = require('path')//lấy lib path có sẵn trong node js khỏi cài
module.exports = (env, agrv) => {
  const isDev = agrv.mode === 'development'
  return {
    entry: './src/index.js',//nhận vào file này
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,//chỉ chạy trên các file này
          exclude: /(node_modules|bower_components)/,//loại trừ các file này
          use: {
            loader: 'babel-loader',//chạy babel loader
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-transform-runtime']
            }
          }
        },
        {
          test: /\.(s[ac]ss|css)$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: { sourceMap: isDev ? true : false }
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: isDev ? true : false }
            }
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]'
              }
            }
          ]
        }
      ]
    },
    resolve: { extensions: ['.js', '.jsx'] },//chứ thứ tự import
    //giả sử import * from name     thì nó ưu tiên js trước
    output: {
      path: path.resolve('dist'),//thư mục sau khi build là dist
      //                path.resolve trả ra đường dẫn tuyệt đối
      publicPath: '../dist/',
      filename: 'bundle.js',//tên file sau khi build
      environment: {//mình muốn biến về ES5 để phù hợp các trình duyệt
        arrowFunction: false,
        bigIntLiteral: false,
        const: false,
        destructuring: false,
        dynamicImport: false,
        forOf: false,
        module: false
      }
    },
    devtool: isDev ? 'source-map' : false,
    //trong môi trường dev mong muốn có src map
    // devServer: {//mở server
    //   contentBase: 'public',//ở index trong này
    //   port: 3000,//localhost có port300
    //   hot: true,//hot reload
    //   publicPath: '/dist/',
    //   watchContentBase: true//kiểm tra thay đổi trong file index
    // }
    devServer: {
        hot: true,
        devMiddleware: {
        publicPath: '/dist/'
        },
        static: {
        directory: 'public'
        },
        port: 3000
    }
  }
}