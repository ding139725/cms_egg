'use strict'

const Controller = require('egg').Controller;

class BlogController extends Controller{
    // 查询所有博客列表
    async index(){
        const data = await this.ctx.service.blogs.getBlogs();
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
    // 新增博客
    async create(){
        let blogObj = this.ctx.request.body;
        let data = await this.ctx.service.blogs.addBlogs(blogObj);
        if(data){
            this.ctx.body = {
                code:20000,
                message:data
            }
        }else{
            this.ctx.body= {
                code:40000,
                message:false
            }
        }
    }
    // 删除博客
    async destroy(){
        let id = this.ctx.params.id;
        let data = await this.ctx.service.blogs.deleteBlog(id);
        if(data){
            this.ctx.body  = {
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
    // 修改博客
    async update(){
        let id = this.ctx.params.id;
        let blogObj = this.ctx.request.body;
        console.log(id);
        console.log(blogObj);
        let data = await this.ctx.service.blogs.putBlog(id,blogObj)
        if(data){
            this.ctx.body ={
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

    async show(){
        let id = this.ctx.params.id;
        const data = await this.ctx.service.blogs.getBlogById(id);
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
}

module.exports = BlogController;