'use strict';

const Controller = require('egg').Controller;
class HomeController extends Controller {
  // 查询
  async index() {
    const { ctx } = this;
    try {
      const data = await ctx.service.resourse.selectResourse();
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
    const resourse = ctx.request.body;
    try {
      const data = await ctx.service.resourse.createResourse(resourse)
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
      console.log(id)
      const data = await this.ctx.service.resourse.deleteResourse(id)
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
      const resourse = this.ctx.request.body
      const data = await this.ctx.service.resourse.updateResourse(id,resourse)
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
      const data = await this.ctx.service.resourse.selectResourseById(id)
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
