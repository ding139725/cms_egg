module.exports=app=>{
    const {STRING,TEXT} = app.Sequelize;
    const Blog = app.model.define('blog',{
        title:STRING,
        synopsis:STRING,
        md_text:TEXT,
        html_text:TEXT
    })
    return Blog;
}