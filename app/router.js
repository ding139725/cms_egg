'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/book', controller.home.book);
  router.get('/blog', controller.home.blog);
  router.get('/blogContent/:id', controller.home.blogContent);
  router.get('/bookChapter/:id', controller.home.bookChapter);
  router.get('/section', controller.home.section);
  router.get('/video', controller.home.video);
  router.get('/resourse', controller.home.resourse);
  router.get('/videoList/:id', controller.home.videoList);
  router.get('/videoContent/:id', controller.home.videoContent);
  router.post('/api/test', controller.home.test);

  // 后台管理系统api
  router.post('/api/login',controller.user.login)
  router.resources('books','/api/books',app.middleware.checktoken(),controller.books) // 书籍管理
  router.resources('users','/api/users',app.middleware.checktoken(),controller.users) // 书籍管理
  router.resources('blogs','/api/blogs',app.middleware.checktoken(),controller.blogs) // 博客管理
  router.resources('chapters','/api/chapters',app.middleware.checktoken(),controller.chapter) // 博客管理
  router.resources('sections','/api/sections',app.middleware.checktoken(),controller.sections) // 博客管理
  router.resources('videos','/api/videos',app.middleware.checktoken(),controller.videos) // 视频类管理
  router.resources('videolist','/api/videolist',app.middleware.checktoken(),controller.videolist) // 视频类管理
  router.resources('resourse','/api/resourse',app.middleware.checktoken(),controller.resourse) // 视频类管理
  router.post('/api/upload',controller.upload.index) // 添加图片
};
