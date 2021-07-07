const PKOA = require('./pkoa.js') 
const Router = require('./router')
const router = new Router();

const app = new PKOA()

// app.use(async(ctx, next)=>{
//     ctx.body = '11'
//     await next()
//     ctx.body = 'end11'
// })
// app.use(async(ctx, next)=>{
//     ctx.body = '22'
//     await next()
//     ctx.body = 'end22'})
// app.use(async(ctx, next)=>{
//     ctx.body = '33'
//     await next()
//     ctx.body = 'end33'})

router.get('/index', async (ctx)=>{ctx.body = 'index'})
router.get('/post', async (ctx)=>{ctx.body = 'post'})
router.get('/list', async (ctx)=>{ctx.body = 'list'})
router.post('/index', async (ctx)=>{ctx.body = 'post'})

app.use(router.routes())
app.listen(3001, ()=>{
    console.log('server at 3001')
})