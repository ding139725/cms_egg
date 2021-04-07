'use strict';

const Service = require('egg').Service;

class BlogService extends Service {
  // 查询所有博客
  async selectBlog (query) {
    try{
      const pageNum = parseInt(query.pageNum) || 1 
      const pageSize = parseInt(query.pageSize) || 5
      const start = pageNum * pageSize - pageSize
      const blogList = await this.app.model.Blog.findAll({
        limit: [start,pageSize]
      })
      const blog = await this.app.model.Blog.findAll()
      const total = blog.length
      return { blogList, total }
    }catch(e){
      return false
    }
  }
  // 添加博客
  async createBlog (blog) {
    try {
      await this.app.model.Blog.create(blog)
      return "添加成功"
    } catch (error) {
      return error
    }
  }
  // 删除博客
  async deleteBlog (id) {
    try {
      await this.app.model.Blog.destroy({
        where: {
          id
        }
      })
      return "删除成功"
    } catch (error) {
      return error
    }
  }
  // 根据id查询博客
  async selectBlogById (id) {
    try{
      const blog = await this.app.model.Blog.findOne({
        where: {
          id
        }
      })
      return { blog }
    }catch(e){
      return false
    }
  }
  async updateBlog (id,blog) {
    try {
      await this.app.model.Blog.update(blog, {
        where: {
          id
        }
      })
      return "修改成功"
    } catch (error) {
      return error;
    }
  }
  
}
module.exports = BlogService;