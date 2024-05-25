import React,{useState} from 'react'
import logo from '../assests/logo.jpeg';
import crm from '../assests/crm.png';
import '../styles/nav.css'

export default function Navbar() {
  
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
        <li class="nav-item"><a class="nav-link" href="#"> Cooling System Parts </a>
        <ul class="submenu2">
          <li class="nav-item"><a class="nav-link" href="#"> Compressor </a></li>
          <li class="nav-item"><a class="nav-link" href="#"> Cooler </a></li>
          <li class="nav-item"><a class="nav-link" href="#"> Condenser </a></li>
          <li class="nav-item"><a class="nav-link" href="#"> Blower Motor </a></li>
          <li class="nav-item"><a class="nav-link" href="#"> Dual A/C Cooler </a></li>
          <li class="nav-item"><a class="nav-link" href="#"> Cooler with Fan(Bus Type) </a></li>

        </ul>
        </li>
        <li class="nav-item"><a class="nav-link" href="#"> Interior Parts </a>
        <ul class="submenu2">
          <li class="nav-item"><a class="nav-link" href="#"> Dashboard Complete </a></li>
            <li class="nav-item"><a class="nav-link" href="#"> Heater and Blower Unit Complete </a></li>
            <li class="nav-item"><a class="nav-link" href="#"> PC Board </a></li>
            <li class="nav-item"><a class="nav-link" href="#"> Relay Box Complete </a></li>
            <li class="nav-item"><a class="nav-link" href="#"> Wiper Water Bottle </a></li>
            <li class="nav-item"><a class="nav-link" href="#"> Wiper Arm Set </a></li>
              <li class="nav-item"><a class="nav-link" href="#"> Clock </a></li>
                <li class="nav-item"><a class="nav-link" href="#"> Wire Harness(Complete) </a></li>
                

        </ul>
        </li>
        <li class="nav-item"><a class="nav-link" href="#"> Exterior Parts </a>
          <ul class="submenu2">
            <li class="nav-item"><a class="nav-link" href="#"> Front Grill </a></li>
            <li class="nav-item"><a class="nav-link" href="#"> Side Mirror Set </a></li>
            <li class="nav-item"><a class="nav-link" href="#"> Front Door </a></li>
            <li class="nav-item"><a class="nav-link" href="#"> Side Door </a></li>
            <li class="nav-item"><a class="nav-link" href="#"> Front Bar Set </a></li>
            <li class="nav-item"><a class="nav-link" href="#"> Upper Arm </a></li>
              <li class="nav-item"><a class="nav-link" href="#"> Radiator </a></li>
                <li class="nav-item"><a class="nav-link" href="#">Rear Door</a></li>
                <li class="nav-item"><a class="nav-link" href="#"> Front Bumper</a></li>
                <li class="nav-item"><a class="nav-link" href="#"> Tail Lamp Set </a></li>
                  <li class="nav-item"><a class="nav-link" href="#"> Steering Wheel Column </a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Head Lamp Set</a></li>
          </ul>
        </li>
        <li class="nav-item"><a class="nav-link" href="#"> Mechanical Parts </a>
        <ul class="submenu2">
          <li class="nav-item"><a class="nav-link" href="#"> Brake Booster</a></li>
            <li class="nav-item"><a class="nav-link" href="#"> Parking Lamp Set </a></li>
            <li class="nav-item"><a class="nav-link" href="#"> Auto Door Motor </a></li>
            <li class="nav-item"><a class="nav-link" href="#"> Air Cleaner </a></li>
            <li class="nav-item"><a class="nav-link" href="#"> Throttle Sensor </a></li>
            <li class="nav-item"><a class="nav-link" href="#"> Turbo </a></li>
              <li class="nav-item"><a class="nav-link" href="#"> Vacuum Solenoid </a></li>
                <li class="nav-item"><a class="nav-link" href="#">Fuel Filter Head</a></li>
                <li class="nav-item"><a class="nav-link" href="#"> Plastic Covers</a></li>
                <li class="nav-item"><a class="nav-link" href="#"> Diesel Pump</a></li>
                  <li class="nav-item"><a class="nav-link" href="#"> Clutch Booster </a></li>
                  <li class="nav-item"><a class="nav-link" href="#">Blower Panel</a></li>
                  <li class="nav-item"><a class="nav-link" href="#"> Injector Set </a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Clutch Plate</a></li>
                    <li class="nav-item"><a class="nav-link" href="#"> Adjustable Fuel Set</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Turbo Sensor</a></li>
                    <li class="nav-item"><a class="nav-link" href="#"> Steering Rack</a></li>
                    <li class="nav-item"><a class="nav-link" href="#"> Engine Complete (Without Gearbox)</a></li>
                     
                       
        </ul>
        </li>
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
 {/* Login button */}

 

<a href="#" style={{ marginRight: '20px' }}>
  <img className="crm-icon" src={crm} width="50" height="50" alt=""/>
</a>

<a href="#" className="notification" style={{ marginRight: '20px' }}>
  <i className="fa fa-shopping-cart" style={{ fontSize: '36px', color: 'ash' }}></i>
  <span className="badge">3</span>
</a>

 {/* <div class="d-flex flex-column sim">

    <span>CRM System</span>
    <small class="text-primary">Click Here</small>
    
          </div>*/}
</div>
</div>
</nav></div>
  )
}