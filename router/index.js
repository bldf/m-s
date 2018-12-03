function init(router){
    router.get('/',async ctx=>{//主页
        ctx.body =  await ctx.render('/index.html');
    });
}
module.exports=init ;