import getProducts from '../services/getProducts'

export const GetAllProducts=()=>(dispatch)=>{
    getProducts.getAllProducts()
    .then(response=>{
        dispatch({
            type:"ALL_PRODUCTS",
            payload:{
                myproducts:response
                
            }
        })
    })
    .catch( error => { console.log(`Error: ${error}`) })
}
