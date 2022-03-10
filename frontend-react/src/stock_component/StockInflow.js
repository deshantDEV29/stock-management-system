import React,{useState,useEffect}  from 'react'
import {useNavigate} from 'react-router-dom'
import './StockInflow.css'

function StockInflow() {

  const [order_id,setOrder_id]=useState("")
  const [item,setItem]=useState("")
  const [quantity,setQuantity]=useState("")
  const [data,setData]=useState([])
  const [product_data,setProduct_data]=useState([])
  let navigate = useNavigate();

  useEffect(async()=>{
    let result = await fetch("http://localhost:8000/api/displayproductrecieved");
     result = await result.json();
    setData(result)

    let productname = await fetch("http://localhost:8000/api/displayproductname");
     productname = await productname.json();
    setProduct_data(productname)
  },[])

  const DisplayData=data.map(
        (stock)=>{
            return(
                <tr className='table__updaterow'>
                    <td>{stock.id}</td>
                    <td>{stock.order_id}</td>
                    <td>{stock.item}</td>
                    <td>{stock.quantity}</td>
                    <td>{stock.updated_at}</td>
                </tr>
            )
        }
    )

  const DisplayProductData=product_data.map(
        (product)=>{
            return(
                <option className='select__option'>{product.product_name}</option>
            )
        }
    )

  console.log("result", data)

  async function addstock (e) {
    e.preventDefault();
    let inventory = {order_id,item,quantity}
    console.log(inventory);

    let result = await fetch("http://localhost:8000/api/productrecieved",{
      method:'POST',
      body:JSON.stringify(inventory),
      headers:{
        "Content-Type":'application/json',
        "Accept":'application/json'
      }
    })
    result = await result.json()
    if(result){   
      console.log(result)
      localStorage.setItem("user-info",JSON.stringify(result))
      navigate("/stockinflow");
      window.location.reload(false);
      
    }
    else{
      console.log("stock update unsuccessful")
      
    }
    e.target.reset();
  }

    
  return (
    <div><div >
      <div className='add__stock'>
        <h1>Add Stock</h1>
        <form>
          <table >
            <tr >
              <th>Order ID</th>
              <th>Product</th>
              <th>Quantity</th>
            </tr>
            <tr>
              <td >
                <input type="text"  value={order_id} onChange={(e)=>setOrder_id(e.target.value)}  className='table__input'></input>
              </td>
              <td >
                <select type="text"  value={item} onChange={(e)=>setItem(e.target.value)}  className='table__select' >
                       {DisplayProductData}           
                </select>
              </td>
              <td >
                <input type="text"  value={quantity} onChange={(e)=>setQuantity(e.target.value)}  className='table__input'></input>
              </td>
            </tr>
          </table>
          <button onClick={addstock} className='btn__addItem'>Add Item</button>
        </form>
      </div>
      <div className='recent__update'>
        <h1>Recent Updates </h1>
        <table className='table__update'>
            <thead className='table__updaterow'>
              <th >ID</th>
              <th>Order ID</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Date</th>
            </thead>
            <tbody>
              {DisplayData}
            </tbody>
            
          </table>
      </div>
    </div></div>
  )
}

export default StockInflow