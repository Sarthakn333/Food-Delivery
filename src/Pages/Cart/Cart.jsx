import { useContext } from "react";
import { storeContext } from "../../Components/Context.jsx/FileContext";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { food_list, itemCards, removeCart,getTotalAmount } = useContext(storeContext);
  const Navigate = useNavigate()
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (itemCards[item._id] > 0) {
            return (
              <>
                <div className="cart-items-title cart-items-item" key={index}>
                  <img src={item.image} />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{itemCards[item._id]}</p>
                  <p>${item.price * itemCards[item._id]}</p>
                  <p className="cross" onClick={() => removeCart(item._id)}>
                    X
                  </p>
                </div>
                <hr />
              </>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
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
          <button onClick={()=> Navigate('/placeOrder')}>Proceed to checkout</button>
        </div>
        {/* </div> */}
        <div className="cart-promocode">
          <div>
            <p>If you have promocode, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="enter promocode here" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
