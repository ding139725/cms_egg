/* eslint valid-jsdoc: "off" */

"use strict"

const fs = require("fs")
const path = require("path")
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {})

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1600735949650_5889"

  // add your middleware config here
  config.middleware = []

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  }

  config.jwt = { sercet: "alex_kai" }

  config.sequelize = {
    dialect: "mysql",
    database: "myblogs",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
  }
  config.view = {
    defaultViewEngine: "nunjucks",
    
  }

  config.cors = {
    origin: "*", //"*"代表所有的跨域请求
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH",
  }

  //设置静态文件目录
  config.static = {
    prefix: "/", //访问路径
    dir: path.join(appInfo.baseDir, "app/public"), //设置静态文件目录
  }

  //设置上传文件
  config.multipart = {
    fileSize: 300 * 1000 * 1000, //设置上传限制为300M
  }

  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: ["*"], //配置白名单
  }

  return {
    ...config,
    ...userConfig,
  }
}
