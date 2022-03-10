import React,{useState,useEffect}  from 'react'
import {useNavigate} from 'react-router-dom'
import './StockOutflow.css'

function StockOutflow() {

  const [sale_id,setSale_id]=useState("")
  const [product_name,setProduct_name]=useState("")
  const [quantity,setQuantity]=useState("")
  const [data,setData]=useState([])
  const [product_data,setProduct_data]=useState([])
  let navigate = useNavigate();

  useEffect(async()=>{
    let result = await fetch("http://localhost:8000/api/displayproductdispatched");
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
                    <td>{stock.sale_id}</td>
                    <td>{stock.product_name}</td>
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

  async function dispatchstock (e) {
    console.log(product_name)
    e.preventDefault();
    let inventory = {sale_id,product_name,quantity}
    console.log(inventory);

    let result = await fetch("http://localhost:8000/api/productdispatched",{
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
      navigate("/stockoutflow");
      window.location.reload(false);
      
    }
    else{
      console.log("stock update unsuccessful")
      
    }
    e.target.reset();
  }

  return(
    <div>
      <div className='remove__stock'>
        <h1>Dispatch Stock</h1>
        <form>
          <table >
            <tr >
              <th>Sale ID</th>
              <th>Product</th>
              <th>Quantity</th>
            </tr>
            <tr>
              <td >
                <input type="text" value={sale_id} onChange={(e)=>setSale_id(e.target.value)}  className='table__input'></input>
              </td>
              <td >
                <select type="text" value={product_name} onChange={(e)=>setProduct_name(e.target.value) } className='table__select' >
                     {DisplayProductData}            
                </select>
              </td>
              <td >
                <input type="text" value={quantity} onChange={(e)=>setQuantity(e.target.value)}   className='table__input'></input>
              </td>
            </tr>
          </table>
          <button onClick={dispatchstock} className='btn__removeItem'>Remove Item</button>
        </form>
      </div>
      <div className='recent__update'>
        <h1>Recent Updates </h1>
        <table className='table__update'>
            <thead className='table__updaterow'>
              <th >ID</th>
              <th>Sale ID</th>
              <th>Product</th>
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

export default StockOutflow