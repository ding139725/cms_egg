'use strict';

const Service = require('egg').Service;

class WebsiteService extends Service{
    async getHomePage(){
        const msg = '首页页面'
        return {
            msg
        }
    }
}


module.exports = WebsiteService;