'use strict';

const Service = require('egg').Service;

class Resourse extends Service{

  async getResourseList () {
    try {
      const data = await this.app.model.Resourse.findAll()
      return data
    } catch (error) {
      return false
    }
  }
  async createResourse ( body ) {
    try {      
      const resourse = {
        code:body.code,
        title:body.title,
        url:body.url
      }
      await this.app.model.Resourse.create(resourse)
      return true
    } catch (error) {
      return false
    }
  }
  async deleteResourse ( id ) {
    try {
      await this.app.model.Resourse.destroy({
        where:{
          id
        }
      })
      return true
    } catch (error) {
      return false
    }
  }
  async selectResourseById ( id ) {
    try {
      const data = await this.app.model.Resourse.findOne({
        where: {
          id
        }
      })
      return data
    } catch (error) {
      return false
    }
  }
  async updateResourse ( id,body ) {
    try {
      await this.app.model.Resourse.update({
        code:body.code,
        title:body.title,
        url:body.url
      },{
        where:{id}
      })
      return true
    } catch (error) {
      return false
    }
  }
}

module.exports = Resourse