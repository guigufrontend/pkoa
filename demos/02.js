const Koa = require('koa');
const app = new Koa();

const main = ctx => {
  ctx.body = 'Hello World';
};

const test = ctx =>{
  ctx.body = 'testestewsts'
}

app.use(main);
app.use(test)
app.listen(3000);
