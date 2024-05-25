import React from 'react'
import img1 from '../assests/img1.jpg';
import '../styles/banner.css'

export default function Banner() {
  return (
    <div>
        <section class="new-banner">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <img src={img1} class="img-fluid" alt="Banner Image"/>
        </div>
        <div class="col-md-6">
          <div class="content">
            <br/><h2>Welcome to V & M Motors!</h2><br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet turpis eu libero lobortis efficitur. An electric motor is a device used to convert electrical energy into mechanical energy. Scientifically speaking, the electric motor is a unit used to convert electric power into motive energy or electrical energy into mechanical energy. Fig. 1.1 is a flow diagram of energy.</p>
            <p>Nulla facilisi. Morbi non nisi et leo condimentum lacinia eget vitae nisi.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}