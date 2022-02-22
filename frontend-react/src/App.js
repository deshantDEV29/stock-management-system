
import './App.css';
import {  BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './home_component/Home';
import Login from './login_component/Login';
import Header from './header_component/Header'
import Navigator from './nav_component/Navigator'
import Report from './report_component/Report'
import Stock from './stock_component/Stock'

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
            <Route path="/report" element={<ReportPage/>}></Route>
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

function ReportPage(){
  return(
    <div className='app__container'>
        <div className='app__left'>
            <Navigator/>
        </div>
          <div className='app__right'>
             <Report/>
          </div> 
    </div>
  );
}

export default App;
