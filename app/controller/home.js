'use strict';

const Controller = require('egg').Controller;
const checkType = require('../utils/checktype')
class HomeController extends Controller {
  // 首页
  async index() {
    const { ctx } = this;
    // 判断请求的请求头类型
    const type = checkType(ctx.request.header["user-agent"]);
    // 获取首页的数据
    const data = await this.ctx.service.website.getHomePage();
    if(type){
      await ctx.render('pc/index.html',data)
    }else{
      await ctx.render('pe/index.html',data)
    }
  }
  // 手册页面
  async book() {
    const { ctx } = this;
    // 判断请求的请求头类型
    const type = checkType(ctx.request.header["user-agent"]);
    // 获取首页的数据
    const data = await this.ctx.service.website.getBookPage();
    if(type){
      await ctx.render('pc/book.html',data)
    }else{
      await ctx.render('pe/book.html',data)
    }
  }
  // 博客页面
  async blog() {
    const { ctx } = this;
    // 判断请求的请求头类型
    const type = checkType(ctx.request.header["user-agent"]);
    // 获取首页的数据
    const data = await this.ctx.service.website.getBlogPage();
    if(type){
      await ctx.render('pc/blog.html',data)
    }else{
      await ctx.render('pe/blog.html',data)
    }
  }
  // 博客内容
  async blogContent () {
    const { ctx } = this;
    // 判断请求的请求头类型
    const type = checkType(ctx.request.header["user-agent"]);
    let id = ctx.params.id;
    console.log(id)
    // 获取首页的数据
    const data = await this.ctx.service.website.getBlogContent(id);
    if(type){
      await ctx.render('pc/blogContent.html',data)
    }else{
      await ctx.render('pe/blogContent.html',data)
    }
  }
  async bookChapter () {
    const { ctx } = this;
    // 判断请求的请求头类型
    const type = checkType(ctx.request.header["user-agent"]);
    let id = ctx.params.id;
    console.log(id)
    const data = await this.ctx.service.website.getBookChapter(id);
    if(type){
      await ctx.render('pc/chapter.html',data)
    }else{
      await ctx.render('pe/chapter.html',data)
    }
  }
  // 小节内容
  async section() {
    const { ctx } = this;
    // 判断请求的请求头类型
    const type = checkType(ctx.request.header["user-agent"]);
    let { book_id,section_id } = ctx.query;
    console.log(book_id,section_id)
    const data = await this.ctx.service.website.getSectionPage(book_id,section_id);
    if(type){
      await ctx.render('pc/section.html',data)
    }else{
      await ctx.render('pe/section.html',data)
    }
  }
  async video () {
    const { ctx } = this;
    // 判断请求的请求头类型
    const type = checkType(ctx.request.header["user-agent"]);
    const data = await this.ctx.service.website.getVideoPage();
    if(type){
      await ctx.render('pc/video.html',data)
    }else{
      await ctx.render('pe/video.html',data)
    }
  }
  async videoList () {
    const { ctx } = this;
    // 判断请求的请求头类型
    const type = checkType(ctx.request.header["user-agent"]);
    let id = ctx.params.id
    const data = await this.ctx.service.website.getVideoListPage( id );
    if(type){
      await ctx.render('pc/videoList.html',data)
    }else{
      await ctx.render('pe/videoList.html',data)
    }
  }
  async test(){
    this.ctx.body={
      code:20000,
      message:'测试成功'
    }
  }
}

module.exports = HomeController;
