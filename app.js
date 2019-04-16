//引入模块
const express=require("express");
//引入bodyParser中间件
const bodyParser=require('body-parser');
//引入product路由器
const productRouter=require('./product.js')
//创建app
var app=express();
//创建3000监听端口
app.listen(3000);
//托管静态资源到public目录下
app.use(express.static('happygo'));
//设置body-parser中间件
app.use(bodyParser.urlencoded({
  extended:false //使用nodejs提供的querystring的模块来解析为对象
}))

//将路由器挂载到路由下
app.use('product',productRouter);