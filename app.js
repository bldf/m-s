const Koa = require('koa')
const path = require('path')
const app = new Koa()
const static = require('koa-static');//加载静态资源
const staticPath = './static';
const render = require('koa-swig');
const Router = require('koa-router');
const router = new Router() ;
const baseRouter = require('./router/index.js');
const co = require('co');
const send = require('koa-send')


/********  Begin 配置 session *********/
app.context.render = co.wrap(render({// 配置swg
    root: path.join(__dirname, 'views'),
    autoescape: true,
    cache: 'memory', // disable, set to false
    ext: 'html',
    varControls: ['${{', '}}'],//配置解析为{{{ }}}，为了防止和vue冲突
    // locals: locals,
    // filters: filters,
    // tags: tags,
    // extensions: extensions,
    writeBody: false
}));

baseRouter(router,send);//加载前段页面路由
app.use(static(//加载静态资源
    path.join( __dirname,  staticPath)
));
app.use(router.routes())
    .use(router.allowedMethods())
//     .use(async (ctx) => {
//     let o = {404:'404',500:'服务器遇到内部错误',202:'服务器已接受请求，但尚未处理',503:'服务器超时',302:'无权操作'};
// if(o[ctx.status]){//如果没有正常的处理请求
//     ctx.body={fail:o[ctx.status]};
// }
// })

app.listen(80,()=>{
    console.log('----------前台node服务启动成功，端口： 80');
});
app.listen(4001,()=>{
    console.log('----------前台node服务启动成功，端口： 4001');
});