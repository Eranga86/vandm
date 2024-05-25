import React from 'react'
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Banner from '../components/Banner';
import Itemlist from '../components/Itemlist';
import Footer from '../components/Footer';
import Loggednavbar from '../components/Loggednavbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Banner />
      <br />
      <Itemlist />
      <Footer />
    </div>
  )
}
