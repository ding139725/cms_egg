module.exports=app=>{
    const {STRING} = app.Sequelize;
    const Resourse = app.model.define('resourse',{
        title:STRING,
        code:STRING,
        url:STRING
    })
    return Resourse;
}