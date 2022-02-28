import React from 'react'
import './Home.css'
import GroupsIcon from '@mui/icons-material/Groups';
import CategoryIcon from '@mui/icons-material/Category';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import { color } from '@mui/system';

function Home() {
  return (
    <div className='home'>
      <div className='summary'>
        <div className='summary__container' style={{ background: '#3366ff' }}>
          <span>
            <h3>Total Products</h3>
            <p>29</p>
          </span>
          <CategoryIcon className='icon' />
        </div>
        <div className='summary__container' style={{ background: '#33cccc' }}>
          <span>
            <h3>Total Suppliers</h3>
            <p>29</p>
          </span>
          <GroupsIcon className='icon'/>
        </div>      
        <div className='summary__container' style={{ background: '#ff9966' }}>
          <span>
            <h3>Total Value of Stocks </h3>
            <p>29</p>
          </span>
          <CurrencyExchangeIcon className='icon'/>
        </div>
        <div className='summary__container' style={{ background: '#ff6666' }}>
          <span>
            <h3>Top Selling Products</h3>
            <p>29</p>
          </span>
          <PointOfSaleIcon className='icon'/>
        </div>     
      </div>
      <div>
        <h1>Inventory Flow</h1>
      </div>
      <div>
        <h1>Profitability</h1>
      </div>
    </div>
  )
}

export default Home