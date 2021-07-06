const add = (x, y)=> x+y
const square = z=>z*z
const fn = (x, y) => square(add(x, y))

const compose = (...[fun1, ...other]) =>(...args)=>{
        let data = fun1(...args)
        other.forEach(fn=>{
            data = fn(data)
        })
        return data
    }

// const composeFn = compose(add, square, square)
// const data =composeFn(1,2)
const data = compose(add, square, square)(1,3)
console.log(data)

function compose2(...middleware){
    return function(){
        return dispatch(0)
        function dispatch(i){
            let fn = middleware[i]
            if(!fn){
                return Promise.resolve()
            }
            return Promise.resolve(
                fn(function next(){
                    return dispatch(i+1)
                })
            )
        }
    }
}


async function f1(next){
    console.log('f1')
    await next()
    console.log('f1 end')
}
async function f2(next){
    console.log('f2')
    await delay()
    await next()
    console.log('f2 end')
}
async function f3(next){
    console.log('f3')
    await next()
    console.log('f3 end')
}
function delay(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('delay')
            resolve(0)
        },2000)
    })
}
// const middlewares = [f1,f2,f3]
compose2(f1, f2 , f3)()