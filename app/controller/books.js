'use strict';

const Controller = require('egg').Controller;

class BookController extends Controller{

    async create(){
        let bookObj = this.ctx.request.body;
        const data = await this.ctx.service.books.createBook(bookObj);
        if(data){
            this.ctx.body = {
                code:20000,
                message:true
            }
        }else{
            this.ctx.body = {
                code:40000,
                message:false
            }
        }
    }


}

module.exports = BookController;