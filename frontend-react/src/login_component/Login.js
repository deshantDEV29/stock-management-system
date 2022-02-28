import React,{useState}  from 'react'
import {useNavigate} from 'react-router-dom'
import './Login.css'

function Login() {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  let navigate = useNavigate();

  async function signin (e) {
    e.preventDefault();
    let item = {email,password}
    console.log(item);

    let result = await fetch("http://localhost:8000/api/login",{
      method:'POST',
      body:JSON.stringify(item),
      headers:{
        "Content-Type":'application/json',
        "Accept":'application/json'
      }
    })
    result = await result.json()
    if(result){   
      console.log(result)
      localStorage.setItem("user-info",JSON.stringify(result))
      navigate("/dashboard");
    }
    else{
      console.log("login unsuccessful")
    }
  }
  
  return (
    <div className='login'>
      <form className='form'>
          <div className="input__container">
            
            <input type="text"  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email'   className="userinput"/>

          </div>
          <div className="input__container">
           
            <input type="password" autoComplete="on" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password'  className="userinput" />
            
          </div>
          <div>
            <button onClick={signin} className='login__btn'>Login</button>
          </div> 
        </form>  
    </div>
  )
}

export default Login