'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/api/test', app.middleware.checktoken(),controller.home.test);
  




  // 后台管理系统api
  router.post('/api/login',controller.user.login)
  router.resources('books','/api/books',controller.books)
  router.post('/api/upload',controller.upload.index) // 添加图片
};
