'use strict';

const Service = require('egg').Service;

class UserService extends Service{

    async login(username,password){
        const user = await this.app.model.User.findOne({
            where: {
                username
            }
        })
        if(user){
            let usr = user.dataValues.username
            let pas = user.dataValues.password;
            if(usr==username&&pas==password){
            const token = this.app.jwt.sign({username,password},this.app.config.jwt.secret)
            const decode = this.ctx.app.jwt.verify(token, this.app.config.jwt.secret);
            console.log(token,decode);
                return token;
            }else{
                return false;
            }
        }
    }

}

module.exports = UserService