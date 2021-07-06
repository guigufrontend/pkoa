const Koa = require('koa');
const app = new Koa();

// const main = function(ctx) {
//   const n = Number(ctx.cookies.get('view') || 0) + 1;
//   ctx.cookies.set('view', n);
//   ctx.response.body = n + ' views';
// }

const main = function(ctx){
  const cookie = ctx.cookies.get('s')
  const s = 'h'+(cookie||'h');
  ctx.cookies.set('s',s)
  ctx.response.body = s
}

app.use(main);
app.listen(3000);
