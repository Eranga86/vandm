import React, { useState, useEffect } from 'react';
import '../styles/slider.css';

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex === 2 ? 0 : prevIndex + 1));
    }, 2500);

    return () => clearInterval(intervalId);
  }, []);

  const goToPrevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className={`carousel-item ${currentIndex === 0 ? 'active' : ''}`} style={{backgroundImage: "url('https://www.bigwheels.my/wp-content/uploads/2021/08/Fuso-Rosa-1.jpg')"}}>
            <div className="carousel-caption">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className={`carousel-item ${currentIndex === 1 ? 'active' : ''}`} style={{backgroundImage: "url('https://a.mktgcdn.com/p/1CvLVoXeQl8lC0slu4gxJ6tNk2BCpxQ3f2oh_QV_AQg/2048x1536.jpg')"}}>
            <div className="carousel-caption">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className={`carousel-item ${currentIndex === 2 ? 'active' : ''}`} style={{backgroundImage: "url('https://delta.creativecirclecdn.com/nsp/original/20220209-092630-IMG_0301.JPG')"}}>
            <div className="carousel-caption">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" onClick={goToPrevSlide}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" onClick={goToNextSlide}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
