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
    const removeCart = cart.find(myCart => myCart.id ===id )
    // cart.push(removeCart)
    // save to local storage

    // const remove = JSON.stringify(removeCart)
    localStorage.removeItem( removeCart)
}
export{addToLS, getStorageCart, removeFromLS}