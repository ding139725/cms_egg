'use strict';

const Controller = require('egg').Controller;
class HomeController extends Controller {
  // 查询
  async index() {
    const { ctx } = this;
    try {
      const query = ctx.request.query
      const data = await ctx.service.blog.selectBlog(query);
      this.ctx.body = {
        code:20000,
        data
      }
    } catch (error) {
      this.ctx.body = {
        code:40000,
        error
      }
    }
  }
  // 添加
  async create () {
    const { ctx } = this;
    const blog = ctx.request.body;
    try {
      const data = await ctx.service.blog.createBlog(blog)
      this.ctx.body = {
        code:20000,
        data
      }
    } catch (error) {
      this.ctx.body = {
        code:40000,
        error
      }
    }
  }
  // 删除
  async destroy () {
    try {
      const id = this.ctx.params.id
      const data = await this.ctx.service.blog.deleteBlog(id)
      this.ctx.body = {
        code:20000,
        data
      }
    } catch (error) {
      this.ctx.body = {
        code:40000,
        error
      }
    }
  }
  // 修改
  async update () {
    try {
      const id = this.ctx.params.id
      const blog = this.ctx.request.body
      console.log (id)
      console.log (blog)
      const data = await this.ctx.service.blog.updateBlog(id,blog)
      this.ctx.body = {
        code:20000,
        data
      }
    } catch (error) {
      this.ctx.body = {
        code:40000,
        error
      }
    }
  }
  // 查询一个
  async show () {
    try{
      const id = this.ctx.params.id
      const data = await this.ctx.service.blog.selectBlogById(id)
      console.log(id)
      this.ctx.body = {
        code: 20000,
        data
      }
    }catch(error){
      this.ctx.body = {
        code: 40000,
        error
      }
    }
  }
}

module.exports = HomeController;
