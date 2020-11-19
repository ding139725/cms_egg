'use strict';

const Controller = require('egg').Controller;

class UploadController extends Controller{

    async index(){
        this.ctx.body = {
            code:20000,
            message:"图片上传成功"
        }
    }

}



module.exports = UploadController