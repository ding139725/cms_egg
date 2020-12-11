'use strict';

const Service = require('egg').Service;

class VideoListService extends Service {
  // 获取视频类列表
  async getVideoList (id) {
    try {
      const data = await this.app.model.Videolist.findAll({
        where:{
          video_id:id
        }
      })
      return data
    } catch (error) {
      return false
    }
  }
  // 删除视频类
  async deleteItem (id) {
    try {
       await this.app.model.Videolist.destroy({
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
        iframe_url:body.iframe_url,
        video_id:body.video_id
      }
      await this.app.model.Videolist.create(video)
      return true
    } catch (error) {
      return false
    }
  }
  //修改视频类
  async updateVideo (id,body) {
    try {
      await this.app.model.Videolist.update({
        title:body.title,
        video_id:body.video_id,
        iframe_url:body.iframe_url,
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
      const data = await this.app.model.Videolist.findOne({
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

module.exports = VideoListService