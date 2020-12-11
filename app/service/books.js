'use strict';

const Service = require('egg').Service;

class BooksService extends Service {
    // 获取所有书籍列表
    async getBook() {
        let bookList = await this.app.model.Book.findAll();
        return bookList;
    }

    // 添加书籍
    async createBook(bookObj) {
        try {
            const book = {
                title: bookObj.title,
                img: bookObj.img,
                orderby: bookObj.orderby
            }
            await this.app.model.Book.create(book);
            return true
        } catch (error) {
            return false;
        }
    }
    // 根据id删除书籍
    async deleteBook(id) {
        try {
            await this.app.model.Book.destroy({
                where: {
                    id
                }
            })
            return true;
        } catch (error) {
            return false;
        }

    }
    // 根据id查询某个书籍
    async getBookById(id){
        try {
            let book = await this.app.model.Book.findOne({
                where:{
                    id
                }
            })
            return book;
        } catch (error) {
            return false;
        }
    }
    // 修改书籍
    async putBook(id,book){
        try {
            await this.app.model.Book.update({
                title:book.title,
                img:book.img,
                orderby:book.orderby
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
    // 通过书的id查询章以及小节内容
    async getBookContent(id){
        let book = await this.getBookById(id)
        const chapter = await this.ctx.service.chapters.getChapter(book.dataValues.id);
        for( let item in chapter ) {
            let chapter_id = chapter[item].dataValues.id
            const sections = await this.ctx.service.sections.getSections(chapter_id)
            chapter[item].dataValues.sectionList = sections
        }
        return chapter
    }
}


module.exports = BooksService;