
6.  Elvis operator

1.  rest parameters
function foo(initialvalue,...rest){
    return rest.reduce((a,v)=>a+v,initialvalue)
}

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

2.  default parameters
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters

function sum(a,b=5){
    return a+b;
}

sum(3) //8
sum(3,10) //13

3.  desectructuracion

const [a,b,...rest] = [1,2,3,4]

const {id,name,...restobj} = {id:1,name:'pedro',phone:616647015}


4.  spread operator
const a = [1,2,3]
const b= [4,5,6]
const c = [...a,...b]

const foo = {id:1,name:'pedro'}
const bar = {name:'pedro hurtado', baz:{id:1}}

const result = {...foo,...bar}
result.baz.id = 55
bar.baz.id

const result = Object.freeze({...foo, ...structuredClone(bar)})

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
https://developer.mozilla.org/en-US/docs/Web/API/structuredClone

5 Operador de cortocircuito

    if(a!==null){
        a()
    }

    a && a()

    function foo(options){
        options = options || {}
    }
    foo();

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing