
import './App.css';
import {  BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './home_component/Home';
import Header from './header_component/Header'
import Navigator from './nav_component/Navigator'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header/>
        <div className='app__container'>
          <Navigator/>
          <Routes>
            <Route path="/" element={<Home/>}/>           
          </Routes> 
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
