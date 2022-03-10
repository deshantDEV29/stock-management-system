import React from 'react'
import './Navigator.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import {Link} from "react-router-dom";

function Navigator() {
  return (
    <div classname='navigator'>
      <Link to='/dashboard' style={{ textDecoration: 'none' }}>
        <div className='navigator__row'>
          <DashboardIcon/>
          <p>Dashboard</p>
        </div>
      </Link>
      <Link to='/stock' style={{ textDecoration: 'none' }}>
        <div className='navigator__row'>
          <Inventory2Icon/>
          <p>Stock</p>
        </div>
      </Link>
      <Link to='/stockinflow' style={{ textDecoration: 'none' }}>
        <div className='navigator__row'>
            <ShowChartIcon/>
            <p>Stock Inflow</p>
        </div> 
      </Link> 
      <Link to='/stockoutflow' style={{ textDecoration: 'none' }}>
        <div className='navigator__row'>
            <ShoppingCartCheckoutIcon/>
            <p>Stock Outflow</p>
        </div>
      </Link>
      <Link to='/logout' style={{ textDecoration: 'none' }}>
        <div className='navigator__row'>
          <LogoutIcon/>
          <p>Logout</p>
        </div>
      </Link>
      
    </div>
  )
}

export default Navigator