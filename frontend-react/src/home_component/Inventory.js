import React,{useState,useEffect}  from 'react'
import './Inventory.css'

function Inventory() {
 
  const [data,setData]=useState([])

  useEffect(async()=>{
    let result = await fetch("http://localhost:8000/api/displayproduct");
     result = await result.json();
    setData(result)
  },[])

  const DisplayData=data.map(
        (stock)=>{
            return(
                <tr className='table__updaterow'>
                    <td>{stock.product_name}</td>
                    <td>{stock.supplier_name}</td>
                    <td>${stock.unit_price}</td>
                    <td>{stock.quantity}</td>
                </tr>
            )
        }
    )

  console.log("result", data)


  return (
    <div >
      <div className='recent__update'>
        <h1>Stock Available </h1>
        <table className='table__update'>
            <thead className='table__updaterow'>
              <th>Product Name</th>
              <th>Supplier</th>
              <th>Unit Price</th>
              <th>Quantity</th>
            </thead>
            <tbody>
              {DisplayData}
            </tbody>
            
          </table>
      </div>
    </div>
  )
}

export default Inventory