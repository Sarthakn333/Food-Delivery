import { useContext} from 'react'
import { assets } from '../../assets/assets'
import './FoodItem.css'
import { storeContext } from '../Context.jsx/FileContext'
// eslint-disable-next-line react/prop-types
const FoodItem = ({name,price,description,image,id}) => {

   // const [count,setCount] = useState(0)
    const {itemCards,addToCart,removeCart} = useContext(storeContext)
  return (
    <div className='FoodItem'>
    <div className='FoodItem-container'>
        <img className='FoodItem-image' src={image} alt='' />
        {!itemCards[id] ? <img src={assets.add_icon_white} alt='' onClick={() => addToCart(id)} className='add'/> : <div className='foodItem-counter'> 
            <img src={assets.remove_icon_red} onClick={() =>removeCart(id)}/>
            <p>{itemCards[id]}</p>
            <img src={assets.add_icon_green} onClick={() => addToCart(id)}/>
        </div>}
    </div>
    <div className='FoodItem-info'>
        <div className='FoodItem-rating'>
          <p>{name}</p>
          <img src={assets.rating_starts} alt=''/>
        </div>
        <p className='FoodItem-desc'>{description}</p>
        <p className='FootItem-price'>${price}</p>
    </div>
      
    </div>
  )
}

export default FoodItem
