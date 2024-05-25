import '../styles/parts.css'

const Parts = () => {
  return (
    <div>
      <div className="card-group">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Cooling System Parts</h5>
          </div>
        </div>
        <div className="card">
          <div className="card-body" style={{ background: 'linear-gradient(to bottom, #ffffff 0%, #000000 100%)', color: '#000000' }}>
            <h5 className="card-title">Cooling System Parts</h5>
            <p className="card-text">Keep your vehicle running smoothly with our range of cooling system parts. From radiators to water pumps, our selection ensures optimal engine temperature regulation, preventing overheating and ensuring peak performance mile after mile.</p>
            <a href="#" className="btn btn-outline-light">View all Cooling System Parts</a>
          </div>
        </div>
      </div>
      <div className="card-group">
        <div className="card">
          <div className="card-body" style={{ background: 'linear-gradient(to bottom, #ffffff 0%, #000066 100%)', color: '#000000' }}>
            <h5 className="card-title">Interior Parts</h5>
            <p className="card-text">Elevate your driving experience with our selection of interior parts. From comfortable seating options to stylish dashboard accessories, we have everything you need to customize and enhance the comfort, functionality, and aesthetics of your vehicle's interior.</p>
            <a href="#" className="btn btn-outline-light">View all Interior Parts</a>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Interior Parts</h5>
          </div>
        </div>
      </div>
      <div className="card-group">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Exterior Parts</h5>
          </div>
        </div>
        <div className="card">
          <div className="card-body" style={{ background: 'linear-gradient(to bottom, #ffffff 0%, #000000 100%)', color: '#000000' }}>
            <h5 className="card-title">Exterior Parts</h5>
            <p className="card-text">Make a statement on the road with our extensive collection of exterior parts. From sleek body kits to durable replacement mirrors, our range of exterior accessories allows you to personalize your vehicle's appearance while enhancing its functionality and protection against the elements.</p>
            <a href="#" className="btn btn-outline-light">View all Exterior Parts</a>
          </div>
        </div>
      </div>
      <div className="card-group">
        <div className="card">
          <div className="card-body" style={{ background: 'linear-gradient(to bottom,  #ffffff 0%, #000066 100%)', color: '#000000' }}>
            <h5 className="card-title">Mechanical Parts</h5>
            <p className="card-text">Keep your vehicle in top condition with our comprehensive selection of mechanical parts. From engine components to transmission parts, our high-quality products ensure reliable performance, smooth operation, and long-lasting durability, so you can drive with confidence knowing your vehicle is in excellent hands.</p>
            <a href="#" className="btn btn-outline-light">View all Mechanical Parts </a>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Mechanical Parts</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Parts;
