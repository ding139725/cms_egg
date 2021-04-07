module.exports = app=>{
  const {STRING,TEXT} = app.Sequelize;
  const Note = app.model.define('note',{
      title:STRING,
      md_text:TEXT,
      html_text:TEXT
  })
  return Note;
}