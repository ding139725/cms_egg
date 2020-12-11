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
  router.get('/videoList/:id', controller.home.videoList);
  router.get('/api/test', app.middleware.checktoken(),controller.home.test);
  

  // 后台管理系统api
  router.post('/api/login',controller.user.login)
  router.resources('books','/api/books',controller.books) // 书籍管理
  router.resources('blogs','/api/blogs',controller.blogs) // 博客管理
  router.resources('chapters','/api/chapters',controller.chapter) // 博客管理
  router.resources('sections','/api/sections',controller.sections) // 博客管理
  router.resources('videos','/api/videos',controller.videos) // 视频类管理
  router.resources('videolist','/api/videolist',controller.videolist) // 视频类管理
  router.post('/api/upload',controller.upload.index) // 添加图片
};
