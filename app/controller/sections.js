'use strict';

const Controller = require('egg').Controller;

class SectionsController extends Controller{
    // 查询小节列表
    async index(){
        let id = this.ctx.request.query.chapter_id
        console.log(id)
        let data = await this.ctx.service.sections.getSections(id);
        if(data){
            this.ctx.body = {
                code:20000,
                message:data
            }
        }else{
          this.ctx.body = {
            code:40000,
            message:false
          }
        }
    }
    // 删除小节
    async destroy () {
      let id = this.ctx.params.id
      const data = await this.ctx.service.sections.deleteSection(id);
      if(data) {
        this.ctx.body = {
          code:20000,
          message:true
        }
      }else{
        this.ctx.body = {
          code:40000,
          message:false
        }
      }
    }
    // 添加小节
    async create () {
      let body = this.ctx.request.body
      const data = await this.ctx.service.sections.createSection(body);
      if( data ) {
        this.ctx.body = {
          code:20000,
          message:true
        }
      } else {
        this.ctx.body = {
          code:40000,
          message:false
        }
      }
    }
    // 根据id查询某一小节的内容
    async show () {
      let id = this.ctx.params.id
      const data = await this.ctx.service.sections.selectSectionById(id);
      if(data){
        this.ctx.body = {
          code:20000,
          message:data
        }
      }else{
        this.ctx.body = {
          code:40000,
          message:false
        }
      }
    }
    async update () {
      let id = this.ctx.params.id;
      let body = this.ctx.request.body;
      const data = await this.ctx.service.sections.updateSection(id,body);
      if( data ) {
        this.ctx.body = {
          code:20000,
          message:true
        }
      }else {
        this.ctx.body = {
          code:40000,
          message:false
        }
      }
    }
}

module.exports = SectionsController;