import React,{useState,useEffect}  from 'react'
import {useNavigate} from 'react-router-dom'
import './Stock.css'

function Stock() {

  const [invoice_no,setInvoice_no]=useState("")
  const [item,setItem]=useState("")
  const [unit_price,setUnit_price]=useState("")
  const [quantity,setQuantity]=useState("")
  const [data,setData]=useState([])
  let navigate = useNavigate();

  useEffect(async()=>{
    let result = await fetch("http://localhost:8000/api/displayStock");
     result = await result.json();
    setData(result)
  },[])

  const DisplayData=data.map(
        (stock)=>{
            return(
                <tr className='table__updaterow'>
                    <td>{stock.id}</td>
                    <td>{stock.invoice_no}</td>
                    <td>{stock.item}</td>
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
    let inventory = {invoice_no,item,unit_price,quantity}
    console.log(inventory);

    let result = await fetch("http://localhost:8000/api/addstock",{
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
      
    }
    else{
      console.log("stock update unsuccessful")
      
    }
    e.target.reset();
  }

  return (
    <div >
      <div className='add__stock'>
        <h1>Add Stock</h1>
        <form>
          <table >
            <tr >
              <th>Invoice No.</th>
              <th>Item</th>
              <th>Unit Price </th>
              <th>Quantity</th>
            </tr>
            <tr>
              <td >
                <input type="text"  value={invoice_no} onChange={(e)=>setInvoice_no(e.target.value)}  className='table__input'></input>
              </td>
              <td >
                <select type="text"  value={item} onChange={(e)=>setItem(e.target.value)}  className='table__select' >
                  <option className='select__option'>Battery</option>
                  <option className='select__option'>Bulb</option>
                  <option className='select__option'>Cutlery</option>
                  <option className='select__option'>Disk</option>
                  <option className='select__option'>Electric Jug</option>
                  <option className='select__option'>Frying Pan</option>
                  <option className='select__option'>Jug</option>
                  <option className='select__option'>Pan</option>
                </select>
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
              <th>Invoice No.</th>
              <th>Item</th>
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