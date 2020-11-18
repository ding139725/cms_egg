'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  




  // 后台管理系统api
  router.post('/api/login',controller.user.login)
};
