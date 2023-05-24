import Home from './Pages/Home'
import {Routes, Route } from 'react-router-dom';
import "./App.css";
import UserDetails from './Pages/UserDetails';

function App() {

  return (
    <>
 
    <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/userdetails' element={ <UserDetails/>}/>
    
    </Routes>
    </>
  )
}

export default App
