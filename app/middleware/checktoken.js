module.exports=()=>{
    return async function(ctx,next){
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
        if(ctx.request.header['token']){
            let token = ctx.request.header['token'];
            const decode = ctx.app.jwt.verify(token, ctx.app.config.jwt.secret);
            let isLogin = ctx.service.user.checkLogin(decode.username,decode.password);
            if(isLogin){
                await next();
            }else{
                ctx.body = {
                    code:40001,
                    message:'权限不对劲'
                }
            }
        }else{
            ctx.body={
                code:50000,
                message:'没有权限'
            }
        }
    }
}