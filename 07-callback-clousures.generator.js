/*
https://developer.mozilla.org/es/docs/Glossary/Callback_function
*/
const data = [1,2,3,4,5,6];
data.filter(v=>v%2===0)
data.filter(function(v){
    return v%2===0
})

/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
*/

function sum(a){
    return function(b){
        debugger
        return a+b
    }
}
sum(5)(3)
const result = sum(5)

/*
Como obtengo el 8 sumando 5 + 3
*/

function events(node, event,cb){
    node.addEventListener(event,cb)
    return ()=>node.removeEventListener(event,cb)
}


function signal(initialValue){
    let value = initialValue;
    const fn = ()=>value;
    fn.set = v=>value = v;
    return fn;
}

/**
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Generator
 * 
 */


/*function filter(array,predicate){
    const newArray=[]
    for(const value of array){
        if(predicate(value)){
            newArray.push(value)
        }
    }
    return newArray;
}*/

function* filter(array,predicate){
    
    for(const value of array){
        if(predicate(value)){
            yield value
        }
    }
    
}

const generator = filter([1,2,3,4,5,6],v=>v%2===0)
generator.next(); //done:true
for(let v of generator){

}
const newArray = [...generator]