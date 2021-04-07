'use strict';

const Controller = require('egg').Controller;
class NoteController extends Controller {
  // 查询
  async index() {
    const { ctx } = this;
    try {
      const data = await ctx.service.note.selectNote();
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
    const note = ctx.request.body;
    try {
      const data = await ctx.service.note.createNote(note)
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
      const data = await this.ctx.service.note.deleteNote(id)
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
      const note = this.ctx.request.body
      const data = await this.ctx.service.note.updateNote(id,note)
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
      const data = await this.ctx.service.note.selectNoteById(id)
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

module.exports = NoteController;
