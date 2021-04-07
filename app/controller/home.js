'use strict';

const Controller = require('egg').Controller;
const checkType = require('../utils/checktype')
class HomeController extends Controller {
  // 首页
  async index() {
    const { ctx } = this;
    // 判断请求的请求头类型
    const query = ctx.request.query
    const type = checkType(ctx.request.header["user-agent"]);
    const data = await ctx.service.blog.selectBlog(query)
    // 获取首页的数据
    if(type){
      await ctx.render('pc/index.html', data)
    }else{
      await ctx.render('pe/index.html', data)
    }
  }
  async blog() {
    const type = checkType(this.ctx.request.header["user-agent"]);
    const id = this.ctx.params.id
    const data = await this.ctx.service.blog.selectBlogById(id)
    console.log(data)
    if (type) {
      await this.ctx.render('pc/blog.html', data)
    } else {
      await this.ctx.render('pc/blog.html', data)
    }
  }
  async note() {
    const type = checkType(this.ctx.request.header["user-agent"]);
    const data = await this.ctx.service.note.selectNote()
    if (type) {
      await this.ctx.render('pc/note.html', data)
    } else {
      await this.ctx.render('pe/note.html', data)
    }
  }
  async resourse() {
    const type = checkType(this.ctx.request.header["user-agent"]);
    const data = await this.ctx.service.resourse.selectResourse()
    if (type) {
      await this.ctx.render('pc/resourse.html', data)
    } else {
      await this.ctx.render('pe/resourse.html', data)
    }
  }
  async noteContent() {
    const id = this.ctx.params.id
    const type = checkType(this.ctx.request.header["user-agent"]);
    const data = await this.ctx.service.note.selectNoteById(id)
    if(type) {
      await this.ctx.render('pc/noteContent.html', data)
    } else {
      await this.ctx.render('pe/noteContent.html', data)
    }
  }
  async admin() {
    await this.ctx.render('admin/index.html')
  }
}

module.exports = HomeController;
