'use strict';

const Service = require('egg').Service;

class WebsiteService extends Service{
    async getHomePage(){
        const bookList = await this.app.model.Book.findAll();
        return {
            bookList
        }
    }
}


module.exports = WebsiteService;