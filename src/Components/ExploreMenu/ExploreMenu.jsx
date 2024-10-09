import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'
// eslint-disable-next-line react/prop-types
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='exploreMenu' id='exploreMenu'>
    <h1>Explore our menu</h1>
    <p className='exploreMenu-text'>Choose from a diverse menu featuring a  delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
    <div className='exploreMenu-list'>
   {menu_list.map((currElem,index)=>(
    <div key={index} className='exploreMenu-listItem' onClick={() =>setCategory(prev =>prev===currElem.menu_name ? 'All' : currElem.menu_name)}>
        <img src={currElem.menu_image} alt='' className={category === currElem.menu_name ? 'active' : ''}/>
        <p>{currElem.menu_name}</p>
    </div>
   ))}
    </div>
    <hr />
    </div>
  )
}

export default ExploreMenu
