'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/blog/:id', controller.home.blog);
  router.get('/note', controller.home.note);
  router.get('/noteContent/:id', controller.home.noteContent);
  router.get('/resourse', controller.home.resourse);
  router.get('/admin/index', controller.home.admin)
  // 后台管理系统的接口
  router.post('/admin/login',controller.user.login)
  router.resources('/admin/blog','/admin/blog',controller.blog)
  router.resources('/admin/note','/admin/note',controller.note)
  router.resources('/admin/resourse','/admin/resourse',controller.resourse)
  router.post('/admin/upload',controller.upload.index)
};
