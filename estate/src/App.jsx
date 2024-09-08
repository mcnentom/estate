import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import HomePage from './Homepage/Homepage';
import Register from './Register/Register';
import Login from './Register/Login';
import './App.css'

function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
      </Routes> 
    </Router>
   
    </>
  )
}

export default App
