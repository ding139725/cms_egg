'use strict';

const Service = require('egg').Service;

class UserService extends Service{

    async login(username,password){
        let isLogin = await this.checkLogin(username,password);
        if(isLogin){
            let user = await this.app.model.User.findOne({
                where: {
                    username
                }
            })
            const token = this.app.jwt.sign({username,password},this.app.config.jwt.secret)
            const decode = this.ctx.app.jwt.verify(token, this.ctx.app.config.jwt.secret);
            return { user, token }
        }else{
            return false;
        }
    }
    // 检验用户账号密码是否正确
    async checkLogin(username,password){
        const user = await this.app.model.User.findOne({
            where: {
                username
            }
        })
        if(user){
            const usr = user.dataValues.username
            const pas = user.dataValues.password;
            if(usr==username&&pas==password){
                return true;
            }else{
                return false;
            }
        }else {
            return false
        }
    }

}

module.exports = UserService