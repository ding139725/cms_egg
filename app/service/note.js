'use strict';

const Service = require('egg').Service;

class NoteService extends Service {
  // 查询所有博客
  async selectNote () {
    try{
      // const pageNum = parseInt(query.pageNum) || 1 
      // const pageSize = parseInt(query.pageSize) || 5
      // const start = pageNum * pageSize - pageSize
      // const blogList = await this.app.model.Blog.findAll({
      //   limit: [start,pageSize]
      // })
      const noteList = await this.app.model.Note.findAll()
      return { noteList }
    }catch(e){
      return false
    }
  }
  async selectNoteById (id) {
    try {
      const note = await this.app.model.Note.findOne({
        where: {
          id
        }
      })
      return { note }
    } catch (error) {
      return false
    }
  }
  async createNote(note) {
    try {
        await this.app.model.Note.create(note)
        return '添加成功'
    } catch (error) {
      return '添加失败'
    }
  }
  async deleteNote(id) {
    try{
      await this.app.model.Note.destroy({
        where:{
          id
        }
      })
      return '删除成功'
    }catch(e){
      return '删除失败'
    }
  }
  async updateNote(id,note) {
    try {
      await this.app.model.Note.update(note,{
        where:{
          id
        }
      })
      return '修改成功'
    } catch (error) {
      return '修改失败'
    }
  }
}
module.exports = NoteService;