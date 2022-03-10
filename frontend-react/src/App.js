
import './App.css';
import {  BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './home_component/Home';
import Login from './login_component/Login';
import Header from './header_component/Header'
import Navigator from './nav_component/Navigator'
import Stock from './stock_component/Stock'
import StockInflow from './stock_component/StockInflow'
import StockOutflow from './stock_component/StockOutflow'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header/>
        <Routes>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/logout" element={<Login/>}></Route>
            <Route path="/stock" element={<StockPage/>}></Route>
            <Route path="/stockinflow" element={<StockInflowPage/>}></Route>
             <Route path="/stockoutflow" element={<StockOutflowPage/>}></Route> 
                   
          </Routes>
      </div>
    </BrowserRouter>
  );
}

function Dashboard(){
  return(
    <div className='app__container'>
        <div className='app__left'>
            <Navigator/>
        </div>
          <div className='app__right'>
             <Home/>
          </div> 
    </div>
  );
}

function StockOutflowPage(){
   return(
    <div className='app__container'>
        <div className='app__left'>
            <Navigator/>
        </div>
          <div className='app__right'>
             <StockOutflow/>
          </div> 
    </div>
  );
}

function StockInflowPage(){
  return(
    <div className='app__container'>
        <div className='app__left'>
            <Navigator/>
        </div>
          <div className='app__right'>
             <StockInflow/>
          </div> 
    </div>
  );
}

function StockPage(){
  return(
    <div className='app__container'>
          <div className='app__left'>
              <Navigator/>
          </div>
          <div className='app__right'>
             <Stock/>
          </div> 
    </div>
  );
}


export default App;
