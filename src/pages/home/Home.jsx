import React from 'react'
import Feature from '../../components/featured/Feature'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import './home.css'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
          <Feature/>
        </div>
    </div>
  )
}

export default Home