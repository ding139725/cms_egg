'use strict';

const Controller = require('egg').Controller;

class ChapterController extends Controller{
    // 查询章节列表
    async index(){
        let book_id = this.ctx.request.query.book_id;
        let data = await this.ctx.service.chapters.getChapter(book_id);
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

    //新增章节列表
    async create () {
      let body = this.ctx.request.body;
      console.log(body)
      const data = await this.ctx.service.chapters.createChapter(body)
      if(data){
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
    // 删除章节列表
    async destroy () {
      let id = this.ctx.params.id;
      const data = await this.service.chapters.deleteChapter(id)
      if(data){
        this.ctx.body={
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
    // 根据id查询单个章节
    async show () {
      let id = this.ctx.params.id
      const data = await this.ctx.service.chapters.selectChapterById(id)
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
    // 修改章节列表
    async update () {
      let id = this.ctx.params.id
      let body = this.ctx.request.body;
      const data = await this.ctx.service.chapters.updateChapter(id,body);
      if (data) {
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

}

module.exports = ChapterController;