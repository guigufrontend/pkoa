const Koa = require('koa');
const route = require('koa-route');
const app = new Koa();

const about = ctx => {
  ctx.response.type = 'html';
  ctx.response.body = '<a href="/">Index Page</a>';
};

const main = ctx => {
  ctx.response.body = 'Hello World';
};
const aaa = ctx=>{
  ctx.response.body='aaaas'
}
app.use(route.get('/', main));
app.use(route.get('/about', about));
app.use(route.get('/aaa', aaa));
app.listen(3000);
