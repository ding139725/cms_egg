'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }

  sequelize: {
    enable: true,
    package: 'egg-sequelize'
  },
  // 使用nunjucks模板
  nunjuscks:{
    enable:true,
    package:'egg-view-nunjucks'
  },
  // 设置允许跨域
  cors:{
    enable:true,
    package:'egg-cors'
  },
  // 使用jwt
  jwt:{
    enable:true,
    package:"egg-jwt"
}
};
