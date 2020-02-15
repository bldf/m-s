const path = require('path') ;
function init(router,send){
    router.get('/',async ctx=>{//主页， 使用render，当页面改变后不会立即刷新，因为在初始化加载了swig模板引擎,默认配置了缓存
        ctx.body =  await ctx.render('/index.html');
    });
    // router.get('/pages', async ctx => {//通过文件夹的方式去加载页面
    //     console.log(ctx.query.path) ;
    //     await send(ctx, ctx.query.path, {
    //       root: path.resolve(__dirname, '../views/pages')
    //     })
    //   });
    // router.get('/pages2', async ctx => {//通过绝对路径加载页面，
    // await send(ctx,'./views/pages/index2.html') ;
    // });
}
module.exports=init ;
