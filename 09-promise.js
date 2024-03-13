class ServiceCustomer{
    static async get(id){
        if(id===1){
            return {id}
        }
        throw "El cliente no existe"
    }
}

class ServicesInvoices{
    static get(clientId){
        return new Promise((resolve,reject)=>{
            if(clientId ===1)
             resolve({clientId, invoices:[]})
            else{
                reject("El cliente no tiene facturas")
            }
        })
    }
}
//resolve->then(n)
//reject->catch

//https://dev.to/nyxtom/client-side-global-error-handling-and-unhandled-promise-rejections-2917
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise
async function main(id){
    try{
        const customer = await ServiceCustomer.get(id)
        const invoices = await ServicesInvoices.get(customer.id)
        console.log(invoices)
    }
    catch(err){
        console.log(err)

    }

}

main(1)