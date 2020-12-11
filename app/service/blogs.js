'use strict';

const Service = require('egg').Service;

class BlogsService extends Service {
    // 查询所有博客列表
    async getBlogs(){
        try {
            const blogList = await this.app.model.Blog.findAll();
            return blogList;
        } catch (error) {
            return false;
        }
    }
    // 新增博客
    async addBlogs(Blogs){
        try {
            const blog = {
                title:Blogs.title,
                img:Blogs.img,
                md_text:Blogs.md_text,
                html_text:Blogs.html_text
            }
            await this.app.model.Blog.create(blog)
            return true;
        } catch (error) {
            return false;
        }
    }
    // 删除博客
    async deleteBlog(id){
        try {
            await this.app.model.Blog.destroy({
                where:{
                    id
                }
            })
            return true;
        } catch (error) {
            return false;
        }
    }
    // 修改博客
    async putBlog(id,Blogs){
        try {
            await this.app.model.Blog.update({
                title:Blogs.title,
                img:Blogs.img,
                md_text:Blogs.md_text,
                html_text:Blogs.html_text
            },{
                where:{
                    id
                }
            })
            return true;
        } catch (error) {
            return false;
        }
    }
    // 根据id查询博客
    async getBlogById(id){
        try {
            let blog = await this.app.model.Blog.findOne({
                where:{
                    id
                }
            })
            return blog;
        } catch (error) {
            return false;
        }
    }
}

module.exports = BlogsService;