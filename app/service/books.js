'use strict';

const Service = require('egg').Service;

class BooksService extends Service {
    // 获取书籍列表
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
}


module.exports = BooksService;