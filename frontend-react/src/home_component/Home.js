
import './Home.css'
import React,{useState,useEffect}  from 'react'
import GroupsIcon from '@mui/icons-material/Groups';
import CategoryIcon from '@mui/icons-material/Category';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import Inventory from './Inventory'

function Home() {

  const [product_total,setProduct_total]=useState("")
  const [supplier_total,setSupplier_total]=useState("")
  const [stock_total,setStock_total]=useState("")
  const [top_product,setTop_product]=useState([])

  useEffect(async()=>{
      let result = await fetch("http://localhost:8000/api/displaytotalproduct");
      result = await result.json();
      setProduct_total(result)

      let result1 = await fetch("http://localhost:8000/api/displaytotalsuppliers");
      result1 = await result1.json();
      setSupplier_total(result1)

      let result2 = await fetch("http://localhost:8000/api/displayvaluestocks");
      result2 = await result2.json();
      setStock_total(result2)

      let result3 = await fetch("http://localhost:8000/api/displaytopselling");
      result3 = await result3.json();
      setTop_product(result3)

    },[])

    const Displaytopproduct=top_product.map(
        (stock)=>{
            return(
                stock.product_name
            )
        }
    )

  return (
    <div className='home'>
      <div className='summary'>
        <div className='summary__container' style={{ background: '#3366ff' }}>
          <span>
            <h3>Total Products</h3>
            <p>{product_total}</p>
          </span>
          <CategoryIcon className='icon' />
        </div>
        <div className='summary__container' style={{ background: '#33cccc' }}>
          <span>
            <h3>Total Suppliers</h3>
            <p>{supplier_total}</p>
          </span>
          <GroupsIcon className='icon'/>
        </div>      
        <div className='summary__container' style={{ background: '#ff9966' }}>
          <span>
            <h3>Total Value of Stocks </h3>
            <p>${stock_total}</p>
          </span>
          <CurrencyExchangeIcon className='icon'/>
        </div>
        <div className='summary__container' style={{ background: '#ff6666' }}>
          <span>
            <h3>Top Selling Products</h3>
            <p>{Displaytopproduct}</p>
          </span>
          <PointOfSaleIcon className='icon'/>
        </div>     
      </div>
      <div>
        <Inventory/>
      </div>
    </div>
  )
}

export default Home