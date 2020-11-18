'use strict';

const Controller = require('egg').Controller;
class UserController extends Controller {
  async login(){
      let loginForm = this.ctx.request.body;
      const token = await this.ctx.service.user.login(loginForm.username,loginForm.password);
      console.log(token);
      if(token){
          this.ctx.body =  {
              code:20000,
              data:'登录成功',
              token
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
