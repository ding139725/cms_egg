'use strict';

const Service = require('egg').Service;

class BooksService extends Service {
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
}


module.exports = BooksService;