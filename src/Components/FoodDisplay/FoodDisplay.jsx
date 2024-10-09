import { useContext } from 'react'
import './FoodDisplay.css'
import { storeContext } from '../Context.jsx/FileContext'
import FoodItem from '../FoodItem/FoodItem'

// eslint-disable-next-line react/prop-types
const FoodDisplay = ({category}) => {
    const {food_list} = useContext(storeContext)
  return (
    <div className='FoodDisplay' id='FoodDisplay'>
    <h2>Top dishes near you</h2>
    <div className='foodDisplay-list'>
    {food_list.map((item,index)=>{
       if(category === 'All' || category===item.category){
        return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price = {item.price} image={item.image} 
        />}
    })}
    </div>
    </div>
  )
}

export default FoodDisplay