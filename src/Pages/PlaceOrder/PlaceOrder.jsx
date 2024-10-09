import { useContext } from "react"
import { storeContext } from "../../Components/Context.jsx/FileContext"
import './PlaceOrder.css'

const PlaceOrder = () => {
  const {getTotalAmount} = useContext(storeContext)
  return (
    <form className="placeOrder">
     <div className="placeOrder-left">
      <p className="title">Delivery Information</p>
      <div className="multifields">
       <input type="text" placeholder="First Name"/>
       <input  type="text" placeholder="Last Name"/>
      </div>
      <input  type="email" placeholder="Email address"/>
      <input  type="text" placeholder="Street"/>
      <div className="multifields">
       <input type="text" placeholder="City"/>
       <input  type="text" placeholder="State"/>
      </div>
      <div className="multifields">
       <input type="text" placeholder="Country"/>
       <input  type="text" placeholder="Zipcode"/>
      </div>
      <input  type="text" placeholder="Phone"/>
     </div>
     <div className="placeOrder-right">
     <div className="card-total">
          <h2>Card Total</h2>
          <div>
            <div className="card-total-details">
              <p>Subtotal</p>
              <p>${getTotalAmount()}</p>
            </div>
            <hr />
            <div className="card-total-details">
              <p>Delivery fee</p>
              <p>${getTotalAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="card-total-details">
              <b>Total</b>
              <b>${getTotalAmount()===0?0:getTotalAmount()+2}</b>
            </div>
          </div>
          <button disabled>Proceed to payment</button>
        </div>
     </div>
    </form>
  )
}

export default PlaceOrder
