'use strict';

const Controller = require('egg').Controller;
const checkType = require('../utils/checktype')
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // 判断请求的请求头类型
    const type = checkType(ctx.request.header["user-agent"]);
    // 获取首页的数据
    const data = await this.ctx.service.website.getHomePage();
    if(type){
      await ctx.render('pc/index.html',data)
    }else{
      await ctx.render('pe/index.html',data)
    }
  }
}

module.exports = HomeController;
