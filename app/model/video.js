module.exports=app=>{
    const {STRING} = app.Sequelize;
    const Video = app.model.define('video',{
        title:STRING,
        img:STRING,
        iframe_url:STRING
    })
    return Video;
}