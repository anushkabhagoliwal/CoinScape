import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { FaEthereum } from "react-icons/fa"
const Header = () => {
  return (
    <div className='navbar' >
        <div className="logo">
            <h1><span>CoinScape </span></h1>
            <FaEthereum size={"40"} /> 
        </div>
      <ul>
        <li> <Link to='/coins'>Coins</Link></li>
        <li> <Link to= '/exchanges'> Exchanges </Link> </li>
        <li> <Link to='/' >Home</Link> </li>
      </ul>
    </div>
  )
}

export default Header

