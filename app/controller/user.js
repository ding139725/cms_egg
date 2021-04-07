'use strict';

const Controller = require('egg').Controller;
class UserController extends Controller {
  async login(){
      let loginForm = this.ctx.request.body;
      const data = await this.ctx.service.user.login(loginForm.username,loginForm.password);
      if(data){
          this.ctx.body =  {
              code:20000,
              data
          }
      }else{
          this.ctx.body = {
              code:40000,
              data:'用户名或密码错误'
          }
      }
  }
}

module.exports = UserController;
