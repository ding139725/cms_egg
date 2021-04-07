"use strict"

const Service = require("egg").Service
class Resourse extends Service {
  async selectResourse() {
    const resourseList = await this.app.model.Resourse.findAll()
    return { resourseList }
  }
  async deleteResourse(id) {
    try {
      await this.app.model.Resourse.destroy({
        where: {
          id,
        },
      })
      return "删除成功"
    } catch (error) {
      return error
    }
  }
  async createResourse(resourse) {
    try {
      await this.app.model.Resourse.create(resourse)
      return "添加成功"
    } catch (error) {
      return error
    }
  }
  async updateResourse(id, resourse) {
    try {
      await this.app.model.Resourse.update(resourse, {
        where: {
          id,
        },
      })
    } catch (error) {
      return error
    }
  }
  async selectResourseById(id) {
    try {
      const resourse = await this.app.model.Resourse.findOne({
        where: {
          id,
        },
      })
      return resourse
    } catch (error) {
      return error
    }
  }
}
module.exports = Resourse
