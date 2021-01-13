'use strict';

const Controller = require('egg').Controller;
class UserController extends Controller {
  async login(){
      let loginForm = this.ctx.request.body;
      const data = await this.ctx.service.user.login(loginForm.username,loginForm.password);
      if(data){
          this.ctx.body =  {
              code:20000,
              data:data.user,
              token:data.token
          }
      }else{
          this.ctx.body = {
              code:40000,
              data:'登录失败'
          }
      }
  }
}

module.exports = UserController;
