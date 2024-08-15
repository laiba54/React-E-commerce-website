import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './Navbar/Header'
import Home from './my components/Dashboard/Home'
import ProductsLists from './my components/Dashboard/ProductsLists'
import Footer from './my components/Dashboard/Footer'
import { useState } from 'react';
import FilterProducts from './my components/Dashboard/FilterProducts'
import ProductDetailed from './my components/Dashboard/ProductDetailed'
import AddCart from './my components/Dashboard/AddCart'
import Checkout from './my components/Dashboard/Checkout'


function App() {
  const [count, setCount] = useState(0);
return (
  <Router>
    <Header count={count} />
    <Routes>
      <Route path="/" element={<Home setCount={setCount}/>}/>
      <Route path="/" element={<ProductsLists setCount={setCount} pageSize={8} />} />
      <Route path='/FilterProducts' element={<FilterProducts setCount={setCount} />}/>
      <Route path='/ProductsLists/:id' element={<ProductDetailed setCount={setCount}/>}/>
      <Route path='/AddCart' element={<AddCart setCount={setCount}/>}/>
      <Route path='/Checkout' element={<Checkout setCount={setCount}/>}/>
    </Routes>
    <Footer />
  </Router>
)
}

export default App

