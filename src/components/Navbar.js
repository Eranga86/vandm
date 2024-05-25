import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from '../assests/logo.jpeg';
import '../styles/nav.css'

export default function Navbar() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/categories/get')
      .then(response => {
        console.log('Responsec:', response.data);
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:3000/spareParts/get')
      .then(response => {
        console.log('Responsep:', response.data);
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
  return (
    
    <div>
      <nav class="navbar navbar-expand-lg navbar-red navbar-dark">
    <div class="wrapper">
      
    </div>
<div class="container-fluid all-show">

  {/*Nav bar icon */}
  <a class="navbar-brand" href="#">
    <img src={logo} alt='logo' width="30" height="30" />
  </a>
 
<a class="navbar-brand" href="#">V & M <br/> Motors</a>
<button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${
              isOpen ? 'show' : ''
            }`}
          >
  
  <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
   
    <li class="nav-item">
      <a class="nav-link" href="#"></a>
    </li>

   

    <li class="nav-item">
      <a class="nav-link" href="#"><b>Home</b></a>
    </li>

    <li class="nav-item">
      <a class="nav-link" href="#"><b>Spare Parts</b></a>
      <ul class="submenu">
      {categories.map((category, index) => (
        <li class="nav-item"><a class="nav-link" href="#"> {category.name} </a>
        <ul class="submenu2">
        {products.map((product, index) => (
          <li class="nav-item"><a class="nav-link" href="#"> {product.name} </a></li>
        ))}

        </ul>
        </li>
       
        
      ))}
      </ul>
    </li>

    <li class="nav-item">
      <a class="nav-link" href="#"><b>About Us</b></a>
    </li>

    <li class="nav-item">
      <a class="nav-link" href="#"><b>contact</b></a>
    </li>

    {/*Search Bar */}
    <div class="search-container">
      <form action="/action_page.php">
        <input type="text" placeholder="Search.." name="search"/>
        <button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
      </form>
    </div>

    
    
  </ul>
  <button type="button" class="btn btn-primary">Login</button>
</div>
</div>
</nav></div>
  )
}