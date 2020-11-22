'use strict';

const path = require('path');
const fs = require('fs');
const pump = require('mz-modules/pump');

const Controller = require('egg').Controller;

class UploadController extends Controller{

    async index(){
        const stream = await this.ctx.getFileStream();
        const filename = new Date().getTime() + path.extname(stream.filename).toLowerCase();
        // 指定上传的目录
        const target = path.join(this.config.baseDir, 'app/public/uploads', filename);
        const writeStream = fs.createWriteStream(target);
        await pump(stream, writeStream);
        this.ctx.body = {
            code: 20000,
            data: {
                name: filename,
                // file: `/uploads/${filename}` //正式地址
                file: `http://127.0.0.1:7001/uploads/${filename}`  //临时服务器地址
            }
        }
    }

}



module.exports = UploadController