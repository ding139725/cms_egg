module.exports = app => {
    const { STRING, TNTEGER, TEXT } = app.Sequelize;
    
    const Section = app.model.define('section', {
        title: STRING,
        orderby: STRING,
        md_text: TEXT,
        html_text: TEXT
    })
    Section.associate = function () {
        app.model.Section.belongsTo(app.model.Chapter, {
            foreignKey: 'chapter_id',
            as: 'chapter'
        })
    }
}