const PKOA = require('./pkoa.js') 
const app = new PKOA()
// app.use((req, res)=>{
//     res.writeHead(200)
//     res.end('hello word')
// })
app.use(async(ctx, next)=>{
    ctx.body = '11'
    await next()
    ctx.body = 'end11'
})
app.use(async(ctx, next)=>{
    ctx.body = '22'
    await next()
    ctx.body = 'end22'})
app.use(async(ctx, next)=>{
    ctx.body = '33'
    await next()
    ctx.body = 'end33'})

app.listen(3001, ()=>{
    console.log('server at 3001')
})