'use strict';

const Service = require('egg').Service;

class UsersService extends Service{
  async getUserList () {
    try {
      const data = await this.app.model.User.findAll()
      return data
    } catch (error) {
      return false
    }
  }
  async deleteUser (id) {
    try {
      await this.app.model.User.destroy({
        where: { 
          id
        }
      })
      return true
    } catch (error) {
      return false
    }
  }
  async createUser ( body ) {
    try {
      const user = {
        username:body.username,
        password:body.password,
        isAdmin:Number(body.isAdmin)
      }
      await this.app.model.User.create(user)
      return true
    } catch (error) {
      return false
    }
  }
  async selectById (id) {
    try {
      const data = await this.app.model.User.findOne({
        where: {
          id
        }
      })
      return data
    } catch (error) {
      return false
    }
  }
  async updateUser ( id, body ) {
    try {
      await this.app.model.User.update({
        username: body.username,
        password: body.password,
        isAdmin: Number(body.isAdmin)
      },{
        where: {
          id
        }
      })
      return true
    } catch (error) {
      return false
    }
  }
}

module.exports = UsersService