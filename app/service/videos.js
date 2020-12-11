'use strict';

const Service = require('egg').Service;

class VideoService extends Service {
  // 获取视频类列表
  async getVideo () {
    try {
      const data = await this.app.model.Video.findAll()
      return data
    } catch (error) {
      return false
    }
  }
  // 删除视频类
  async deleteVideo (id) {
    try {
      await this.app.model.Video.destroy({
        where:{
          id
        }
      })
      return true
    } catch (error) {
      return false
    }
  }
  // 添加视频类
  async createVideo (body) {
    try {      
      const video = {
        title:body.title,
        img:body.img
      }
      await this.app.model.Video.create(video)
      return true
    } catch (error) {
      return false
    }
  }
  //修改视频类
  async updateVideo (id,body) {
    try {
      await this.app.model.Video.update({
        title:body.title,
        img:body.img
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
  // 根据id查询某一类的数据
  async selectVideoById (id) {
    try {
      const data = await this.app.model.Video.findOne({
        where:{
          id
        }
      })
      return data
    } catch (error) {
      return false
    }
  }
}

module.exports = VideoService