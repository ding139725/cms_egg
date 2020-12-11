module.exports=app=>{
  const {STRING} = app.Sequelize;
  const Videolist = app.model.define('videolist',{
      title:STRING,
      iframe_url:STRING
  })
  Videolist.associate = function() {  
    app.model.Videolist.belongsTo(app.model.Video,{
        foreignKey: 'video_id',
        as:'video'
    })
}
  return Videolist;
} 