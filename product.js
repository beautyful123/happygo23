//引入服务器模块
const express=require("express");
//创建一个空的路由器
var router=express.Router();
//引入自己写的mysql连接池
const pool=require('../pool.js');


//导出服务器
module.exports=router;

