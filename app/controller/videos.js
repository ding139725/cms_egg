'use strict'

const Controller = require('egg').Controller;

class VideoController extends Controller {
  // 获取视频类的列表
  async index () {
    const data = await this.ctx.service.videos.getVideo();
    if ( data ) {
      this.ctx.body = {
        code:20000,
        message: data
      }
    }else {
      this.ctx.body = {
        code:40000,
        message: false
      }
    }
  }
  // 根据id删除视频类
  async destroy () {
    let id = this.ctx.params.id;
    const data = await this.ctx.service.videos.deleteVideo(id)
    if ( data ) {
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
  // 添加视频类
  async create () {
    let body = this.ctx.request.body
    const data = await this.ctx.service.videos.createVideo(body)
    if ( data ) {
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
  // 修改视频类
  async update () {
    let id = this.ctx.params.id
    let body = this.ctx.request.body
    const data = await this.ctx.service.videos.updateVideo(id,body)
    if ( data ) {
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
  async show () {
    let id = this.ctx.params.id
    const data = await this.ctx.service.videos.selectVideoById(id)
    if ( data ) {
      this.ctx.body = {
        code:20000,
        message:data
      }
    } else {
      this.ctx.body = {
        code:40000,
        message:false
      }
    }
  }
}

module.exports = VideoController