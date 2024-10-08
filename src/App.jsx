import React ,{ useState } from 'react' 
import './App.css'
import './index.css'
import Productpage from './Product/Productpage'
import CategoryPage from './Product/Category'
import ProductOverview from './Product/ProductOverview'
import { BrowserRouter as Router, Routes, Route , Navigate ,Outlet  } from 'react-router-dom';
import NavBar from './NavBar/Navbar'
import Login from './Product/Login'
 

function App() {
  
  const [Menus, setMenus] = useState([
    { name: "Home" ,url: "/home" },
    { name: "Category" ,url: "/Category" }
  ]);

  const [IsloggedIn,setLoginIn] = useState(false);
   
  return (
    <>

     {IsloggedIn == true ? <NavBar CompanyName={'E-Shopping Mart'} Categorylist={ Menus }/> :''}
     
 
     <Router>
        <Routes>
       
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Productpage />} />
          <Route path="/category" element={<CategoryPage />} />           
          <Route path="/category-wise/product/search" element={<Productpage />} />  
          <Route path="/product-details/" element={<ProductOverview />} />        
        </Routes>
      </Router>
    </>
  )
}

export default App
