'use strict';

const Service = require('egg').Service;

class UserService extends Service{

    async login(username,password){
        let isLogin = this.checkLogin(username,password);
        if(isLogin){
            const token = this.app.jwt.sign({username,password},this.app.config.jwt.secret)
            const decode = this.ctx.app.jwt.verify(token, this.ctx.app.config.jwt.secret);
            console.log(decode);
            return token
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
            let usr = user.dataValues.username
            let pas = user.dataValues.password;
            if(usr==username&&pas==password){
                return true;
            }else{
                return false;
            }
        }
    }

}

module.exports = UserService