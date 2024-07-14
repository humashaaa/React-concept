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

// remove cart
const removeFromLS = id=>{
    const cart = getStorageCart()
    const remaining = cart.filter(idx => idx !==id )

    const saveCartStringify = JSON.stringify(remaining)
    localStorage.setItem('cart', saveCartStringify)
}
export{addToLS, getStorageCart, removeFromLS}