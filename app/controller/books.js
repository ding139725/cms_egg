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
    // 根据id删除书籍
    async destroy(){
        let id = this.ctx.params.id;
        let data = await this.ctx.service.books.deleteBook(id);
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
    // 根据id查询某一个书籍
    async show(){
        let id = this.ctx.params.id;
        const data = await this.ctx.service.books.getBookById(id);
        if(data){
            this.ctx.body = {
                code:20000,
                message:data
            }
        }else{
            this.ctx.body = {
                code:40000,
                message:false
            }
        }
    }
    // 修改
    async update(){
        let id = this.ctx.params.id;
        let book = this.ctx.request.body;
        console.log(id);
        console.log(book);
        let data = await this.ctx.service.books.putBook(id,book);
        if(data){
            this.ctx.body = {
                code:20000,
                message:data
            }
        }else{
            this.ctx.body = {
                code:40000,
                message:data
            }
        }
    }

}

module.exports = BookController;