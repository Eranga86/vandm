import React, { useState } from 'react';
import '../styles/catogory.css';
import Compreesor from '../assests/compreesor.jpg'

const Catogory = () => {
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
    <div>
      <div class="container-fluid">Cooling System Parts </div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">

          <div class="card h-100">

            <div class="card-body">
              <h5 class="card-title">Compressor</h5>
              <img src={Compreesor} alt="Compreesor" width="100px" height="100px" />
              <p class="card-text" style={{ marginTop: '10px' }}>Price:</p>
              <p class="card-text">Brand:</p>
              <div className="col">
                <p>Quantity:
                  <button id="decrease" onClick={handleDecrease} style={{ marginLeft: '10px' }}>-</button>
                  <span id="quantity">{quantity}</span>
                  <button id="increase" onClick={handleIncrease}>+</button>
                </p>
              </div>

            </div>
            <a href="#" class="btn btn-primary">Add to cart</a>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">

            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <img src="images/debit.png" alt="Debit" className="me-2" />
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">

            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <img src="images/debit.png" alt="Debit" className="me-2" />
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>



  )




}
export default Catogory;
