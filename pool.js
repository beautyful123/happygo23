//引入mysql模块
const mysql=require("mysql");
//创建数据库连接池
var Pool=mysql.createPool({
  host:'127.0.0.1',
  port:3306,
  user:'root',
  password:'',
  database:'',
  connectionLimit:20
});