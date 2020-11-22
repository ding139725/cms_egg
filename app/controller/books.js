'use strict';

const Controller = require('egg').Controller;

class BookController extends Controller{
    // 查询书籍列表
    async index(){
        let data = await this.ctx.service.books.getBook();
        if(data){
            this.ctx.body = {
                code:20000,
                message:data
            }
        }
    }

    // 添加书籍
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