module.exports = app => {
    app.beforeStart(async function() {
        // await app.model.sync({ force: true }); // 开发环境使用，会删除数据表
        // sync方法会根据模型创建表
        await app.model.sync({});
    });
};
