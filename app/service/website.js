'use strict';

const Service = require('egg').Service;

class WebsiteService extends Service{
    // 首页
    async getHomePage(){
        const bookList = await this.app.model.Book.findAll();
        const blogList = await this.app.model.Blog.findAll();
        return {
            bookList,
            blogList
        }
    }
    // 手册
    async getBookPage(){
        const bookList = await this.app.model.Book.findAll();
        const blogList = await this.app.model.Blog.findAll();
        return {
            bookList,
            blogList
        }
    }
    // 博客
    async getBlogPage(){
        const blogList = await this.app.model.Blog.findAll();
        return{
            blogList
        }
    }
    // 博客内容
    async getBlogContent (id) {
        const blogList = await this.app.model.Blog.findAll();
        const blog = await this.app.model.Blog.findOne({
            where:{
                id
            }
        })
        return {
            blog,
            blogList
        }
    }
    // 书籍菜单栏页面
    async getBookChapter (id) {
        const book = await this.app.model.Book.findOne({
            where:{
                id
            }
        })
        const chapterList = await this.ctx.service.books.getBookContent(id)
        console.log(chapterList)
        return { 
            chapterList,
            book
        }
    }
    // 小节内容页面
    async getSectionPage (book_id,section_id) {
        const blogList = await this.app.model.Blog.findAll();
        const chapterList = await this.ctx.service.books.getBookContent(book_id)
        const section = await this.ctx.service.sections.selectSectionById(section_id)
        const bookList = await this.app.model.Book.findAll();
        const book = await this.ctx.service.books.getBookById(book_id);
        return{
            blogList,
            section,
            chapterList,
            bookList,
            book
        }
    }
    // 视频类页
    async getVideoPage(){
        const videoList = await this.app.model.Video.findAll();
        const blogList = await this.app.model.Blog.findAll();
        return {
            videoList,
            blogList
        }
    }

    async getVideoListPage (video_id) {
        const video = await this.ctx.service.videos.selectVideoById(video_id)
        const videoList = await this.app.model.Videolist.findAll({
            where:{
                video_id
            }
        })
        return {
            videoList,
            video
        }
    }
}


module.exports = WebsiteService;