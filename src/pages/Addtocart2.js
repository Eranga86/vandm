import React, { useState } from 'react';
import '../styles/addtocart2.css';
import Visa from '../assests/visa.png';
import Amex from '../assests/amex.png';
import Debit from '../assests/debit.png';
import Debit2 from '../assests/debit2.png';
import Compreesor from '../assests/compreesor.jpg'


const Addtocart2 = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <div className="card">
      <div className="row">
        <div className="col-md-8 cart">
          <div className="title">
            <div className="row">
              <div className="col">
                <h4><b>Shopping Cart</b></h4>
              </div>
              <div className="col align-self-center text-right text-muted">1 item</div>
            </div>
          </div>
          <div className="row border-top border-bottom">
            <div className="row main align-items-center">
              <div className="col-2">
                <img src={Compreesor} alt="Compreesor" />
              </div>
              <div className="col">
                <div className="row text-muted">Cooling System Part</div>
                <div className="row">Compressor</div>
              </div>
              <div className="col">
                <button id="decrease" onClick={handleDecrease}>-</button>
                <span id="quantity">{quantity}</span>
                <button id="increase" onClick={handleIncrease}>+</button>
              </div>
              <div className="col"> Rs 169,900 <span className="close"></span></div>
            </div>
          </div>
        </div>
        <div className="col-md-4 summary">
          <div>
            <h5><b>Summary</b></h5>
          </div>
          <hr />
          <div className="row">
            <div className="col" style={{ paddingLeft: 0 }}>ITEMS 1</div>
            <div className="col text-right"> Rs 169,900</div>
          </div>
          <div className="row" style={{ borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0' }}>
            <div className="col">TOTAL PRICE</div>
            <div className="col text-right">Rs 169,900</div>
          </div>



          <div className="row" style={{ borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0' }}>
            <div className="col image-row" style={{ margin: 0 }}>
              <img src={Visa} alt="Visa" className="me-2" />
              <img src={Debit} alt="Debit" className="me-2" />
              <img src={Amex} alt="Amex" className="me-2" />
              <img src={Debit2} alt="Debit2" className="me-2" />
            </div>
          </div>





          <div className="button-container text-center">
            <button>Checkout</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Addtocart2;
