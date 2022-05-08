//For add item to cart

export const addCart = (product)=>{
  return{
    type:"ADDITEM",
    payload:product
  }
}

// For Delete Items From Cart

export const delCart = (product)=>{
  return{
    type:"DELITEM",
    payload:product
  }
}

