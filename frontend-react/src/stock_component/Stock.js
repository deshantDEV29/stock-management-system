import React,{useState,useEffect}  from 'react'
import {useNavigate} from 'react-router-dom'
import './Stock.css'

function Stock() {

  const [product_name,setProduct_name]=useState("")
  const [supplier_name,setSupplier_name]=useState("")
  const [unit_price,setUnit_price]=useState()
  const [quantity,setQuantity]=useState()
  const [data,setData]=useState([])
  let navigate = useNavigate();

  useEffect(async()=>{
    let result = await fetch("http://localhost:8000/api/displayproduct");
     result = await result.json();
    setData(result)
  },[])

  const DisplayData=data.map(
        (stock)=>{
            return(
                <tr className='table__updaterow'>
                    <td>{stock.id}</td>
                    <td>{stock.product_name}</td>
                    <td>{stock.supplier_name}</td>
                    <td>{stock.unit_price}</td>
                    <td>{stock.quantity}</td>
                    <td>{stock.updated_at}</td>
                </tr>
            )
        }
    )

  console.log("result", data)

  async function addstock (e) {
    e.preventDefault();
    let inventory = {product_name,supplier_name,unit_price,quantity}
    console.log(inventory);

    let result = await fetch("http://localhost:8000/api/addproduct",{
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
      navigate("/stock");
      window.location.reload(false);
      
    }
    else{
      console.log("stock update unsuccessful")
      
    }
    e.target.reset();
  }

  return (
    <div >
      <div className='add__stock'>
        <h1>Add Product</h1>
        <form>
          <table >
            <tr >
              <th>Product Name</th>
              <th>Supplier</th>
              <th>Unit Price </th>
              <th>Quantity</th>
            </tr>
            <tr>
              <td >
                <input type="text"  value={product_name} onChange={(e)=>setProduct_name(e.target.value)}  className='table__input'></input>
              </td>
              <td >
                <input type="text"  value={supplier_name} onChange={(e)=>setSupplier_name(e.target.value)}  className='table__input' ></input>
              </td>
              <td >
                <input type="text"  value={unit_price} onChange={(e)=>setUnit_price(e.target.value)}  className='table__input'></input>
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
              <th>Product Name</th>
              <th>Supplier</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Date</th>
            </thead>
            <tbody>
              {DisplayData}
            </tbody>
            
          </table>
      </div>
    </div>
  )
}

export default Stock