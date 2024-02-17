import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './assets/Navbar'
import Home from './assets/pages/Home'
import Services from './assets/pages/Services'
import Products from './assets/pages/Products'
import SignUp from './assets/pages/SignUp'

function App() {
  return (
   <>
   <Router>
     <NavBar />
     <Routes>
       {/* <Route path='/'  element={<NavBar/>} /> */}
       <Route path='/'  element={<Home/>} />
       <Route path='/services'  element={<Services/>} />
       <Route path='/products'  element={<Products/>} />
       <Route path='/sign-up'  element={<SignUp/>} />
     </Routes>
   </Router>
   </>
  )
}

export default App
