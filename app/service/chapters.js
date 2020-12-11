'use strict';

const Service = require('egg').Service;

class ChaptersService extends Service {
    // 获取所有书籍列表
    async getChapter(book_id) {
      const chapterList = await this.app.model.Chapter.findAll({
        'order': [
            ['orderby', 'asc'],
        ],
        include: [{
            model: this.app.model.Book,
            as: 'book'
        }],
        where: {
            book_id: book_id
        }
    });
        return chapterList;
    }
    // 添加章节
    async createChapter(body) {
      try {
        const chapter = {
          title:body.title,
          orderby:body.orderby,
          book_id:body.book_id
        }
        await this.app.model.Chapter.create(chapter)
        return true
      } catch (error) {
        return false
      }
    }
    // 删除章节
    async deleteChapter(id) {
      try {
        await this.app.model.Chapter.destroy({
          where:{
            id
          }
        })
        return true
      } catch (error) {
        return false
      }
    }
    // 根据id查询章节
    async selectChapterById (id) {
      try {
        const data =  await this.app.model.Chapter.findOne({
          where:{
            id
          }
        })
        return data
      } catch (error) {
        return false
      }
    }
    // 修改章节
    async updateChapter(id,body) {
      try {
        await this.app.model.Chapter.update({
          title:body.title,
          orderby:body.orderby,
          book_id:body.book_id
        },{
          where:{
            id
          }
        })
        return true
      } catch (error) {
        return false
      }
    }
}


module.exports = ChaptersService;