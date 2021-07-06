const Koa = require('koa');
const app = new Koa();

const main = ctx => {
  ctx.throw(500);
};

app.on('error', (err, ctx) => {
  // console.error('server error', err);
  ctx.response.body={message:err}
});

app.use(main);
app.listen(3000);
