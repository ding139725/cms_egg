'use strict';

const Service = require('egg').Service;

class SectionsService extends Service {
    // 获取对应章id下的所有小节
    async getSections(id) {
        try {
          const sectionsList = await this.app.model.Section.findAll({
            'order': [
                ['orderby', 'asc'],
            ],
            include: [{
                model: this.app.model.Chapter,
                as: 'chapter'
            }],
            where: {
                chapter_id: id
            }
        });
          return sectionsList;
        } catch (error) {
          return false;
        }
    }
    // 删除小节
    async deleteSection(id) {
      try {
        await this.app.model.Section.destroy({
          where:{
            id
          }
        })
        return true
      } catch (error) {
        return false
      }
    }
    // 新增小节
    async createSection(body) {
      console.log(body)
      try {
        const section = {
          title:body.title,
          orderby:body.orderby,
          md_text:body.md_text,
          html_text:body.html_text,
          chapter_id:body.chapter_id
        }
      await this.app.model.Section.create(section)
      return true
      } catch (error) {
       return false 
      }
    }
    // 根据id查询具体节内容
    async selectSectionById(id) {
      try {
        const data = await this.app.model.Section.findOne({
          where:{
            id
          }
        })
        return data
      } catch (error) {
        return false
      }
    }
    // 修改小节内容
    async updateSection(id,body) {
      try {
        await this.app.model.Section.update({
          title:body.title,
          orderby:body.orderby,
          md_text:body.md_text,
          html_text:body.html_text,
          chapter_id:body.chapter_id
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


module.exports = SectionsService;