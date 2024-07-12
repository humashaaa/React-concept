const getStorageCart = ()=>{
    const storedCartString = localStorage.getItem('cart')
    if(storedCartString){
        return JSON.parse(storedCartString)
    }
        return [];
    
}

// local storage e add kora
const addToLS = id=>{
    const cart = getStorageCart()
    cart.push(id)
    // save to local storage

    const saveCartStringify = JSON.stringify(cart)
    localStorage.setItem('cart', saveCartStringify)
}
export{addToLS}