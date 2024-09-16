import React from 'react'
import Products from './Products'

function Home() {
  return (
    <div className='hero'>
      <div className="card text-bg-dark text-white border-0">
        <img src="./assets/bg-amiri.webp" className="card-img" alt="Background" height="550px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">NEW PRODUCTS</h5>
            <p className="card-text lead fs-2 ">CHECK IT OUT!!!</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  )
} export default Home;
