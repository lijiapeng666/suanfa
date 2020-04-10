webpack的入口为 entry:"./input" 配置多个文件 entry:{home:"./home.js",about:"about.js",other:"other.js" }
         出口为 output{path:path.resolve(__dirname,'dist'),filename:"buildle.js"}  配置多个filename不能写死 filename:'[name].build.js'


配置模式：mode:"development"(开发模式)


loaders(预处理源文件的配置)  主要分为几大类（files,json,transpiling(对各种类型其他语言,比如bable),Styling(对样式进行转换，
style-lodaer,css-loader,less-loader,sass-loader),linting(代码格式化（eslint-loader）) ）      
常见的loaders： url-loader
如何应用loader
         module:{
             rules:{
                 test:/\.(png|jpg|gif)$/i,
                 use:[
                     {
                         loader:"url-loader",
                         options:{
                             limit:8192
                         }
                     }
                 ]
             }
         }


plugins (插件，能够使webpack更灵活)
        mini-css-extract-plugins 
        plugins:[
        new MiniCssExtractPlugins({
             filename:"[name].css",
             chunkFilename:"[id].css"
           })
       ]  
       对应scss-loader的use要改变,将其应用
        
       DefinePlugin

       new webpack.DefinePlugin({
           "SEVER":"www.sino.com"
       })
       

       HtmlWebpackPlugin

       new HtmlWebpackPlugin() 便于用html把js和css文件包起来

       
devSever(启动服务器，热更新)
       devSever:{

         contentBase:path.join(__dirname,'dist'),
         compress:true
         port:8080,

       }










