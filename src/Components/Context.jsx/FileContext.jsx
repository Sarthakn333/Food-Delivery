import { createContext, useState } from "react";
import { food_list } from "../../assets/assets";

// eslint-disable-next-line react-refresh/only-export-components
export const storeContext = createContext(null)

// eslint-disable-next-line react/prop-types
const FileContext = ({children}) => {
 
    const [itemCards,setItemCards]= useState({})

    const addToCart = (id) =>{
        if(!itemCards[id]){
         setItemCards((prev)=> ({...prev,[id]:1}))
        }else{
        setItemCards((prev)=> ({...prev,[id]:prev[id]+1}))
        }
    }
    const removeCart = (id) =>{
     setItemCards((prev)=> ({...prev,[id]:prev[id]-1}))
    }

    const getTotalAmount = () =>{
      let amount = 0;
      for (const item in itemCards){
        if(itemCards[item]>0){
          let itemInfo = food_list.find((product)=> product._id===item)
          amount += itemInfo.price*itemCards[item]
        }
      }
      return amount
    }
    const contextValue = {
            food_list,setItemCards,itemCards,addToCart,removeCart,getTotalAmount
    }
  return (
    <storeContext.Provider value = {contextValue}>{children}</storeContext.Provider>
  )
}

export default FileContext
