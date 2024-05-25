import React, { useState } from 'react';
import CartModal from '../components/CartModal';
import Sparepart5 from '../assests/spare_part_img5.jpg'
import Loggednavbar from '../components/Loggednavbar';
import Itemlist from '../components/Itemlist';
import Footer from '../components/Footer';
import '../styles/addtocart.css';

const Addtocart = () => {
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);

  const handleAddToCart = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleStarClick = (event) => {
    const selectedRating = parseInt(event.target.getAttribute('data-rating'));
    setRating(selectedRating);
  };

  return (
    
    <div className="product-page">
      <Loggednavbar/>
      <br></br>
      <section className="new-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-6 cart">
              <img src={Sparepart5} className="img-fluid" alt="Banner Image" />
            </div>
            <div className="col-md-6 summary">
              <div className="spare-part-info">
                <h3>Front Buffer</h3>
                <p>Price: Rs.3200.00</p>
                <select name="model" id="model">
                  <option value="">Select Model</option>
                  <option value="model1">Model 1</option>
                  <option value="model2">Model 2</option>
                  <option value="model3">Model 3</option>
                </select>
                <div className="row align-items-center">
                  <br/>
                  <h6>Quantuty:</h6>
                  <div className="col">
                    <div className="quantity-selector">
                      <div className="quantity-box" onClick={decreaseQuantity}>-</div>
                      <div className="quantity-box middle-box">{quantity}</div>
                      <div className="quantity-box" onClick={increaseQuantity}>+</div>
                    </div>
                  </div>
                  <div className="col">
                    <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
                  </div>
                </div>
                <div className="divider"></div>
                <br/>
                <p><b>About the Spare Part:</b></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor orci eu velit placerat, vel pharetra felis malesuada. Integer fermentum posuere ultricies.</p>
              </div>
             
              <div className="divider"></div>
              <div className="review-container">
                <br/>
                <h4>Customer Reviews</h4>
                <div className="star-rating">
                  {[1, 2, 3, 4, 5].map(star => (
                    <span
                      key={star}
                      className={`star ${rating >= star ? 'active' : ''}`}
                      data-rating={star}
                      onClick={handleStarClick}
                    >
                      &#9733;
                    </span>
                  ))}
                </div>
                <p className="selected-rating">
                  {rating > 0 ? `You rated this ${rating} stars.` : ''}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CartModal show={showModal} onClose={handleCloseModal} />
    <br/>
    <Itemlist/>
    <br/>
    <Footer/>
    </div>
  );
};

export default Addtocart;
