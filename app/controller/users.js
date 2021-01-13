'use strict';

const Controller = require('egg').Controller;

class UsersController extends Controller {

  async index () {
    const data = await this.ctx.service.users.getUserList();
    if ( data ) {
      this.ctx.body = {
        code:20000,
        message:data
      }
    }else {
      this.ctx.body = {
        code:40000,
        message: false
      }
    }
  }
  async destroy () {
    let id = this.ctx.params.id
    const data = await this.ctx.service.users.deleteUser(id);
    if ( data ) {
      this.ctx.body = {
        code: 20000,
        message: data
      }
    } else {
      this.ctx.body = {
        code: 20000,
        message: false
      }
    }
  }
  async create () {
    let body = this.ctx.request.body
    const data = await this.ctx.service.users.createUser(body)
    if ( data ) {
      this.ctx.body = {
        code: 20000,
        message: true
      }
    } else {
      this.ctx.body = {
        code: 40000,
        message: false
      }
    }
  }
  async show () {
    let id = this.ctx.params.id;
    const data = await this.ctx.service.users.selectById(id);
    if ( data ) {
      this.ctx.body = {
        code: 20000,
        message: data
      }
    } else {
      this.ctx.body = {
        code: 40000,
        message: false
      }
    }
  }
  async update () {
    let id = this.ctx.params.id;
    let body = this.ctx.request.body;
    const data = await this.ctx.service.users.updateUser(id,body);
    if ( data ) {
      this.ctx.body = {
        code: 20000,
        message: true
      }
    } else {
      this.ctx.body = {
        code: 40000,
        message: false
      }
    }
  }
}
module.exports = UsersController