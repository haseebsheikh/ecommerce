import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Outlet } from 'react-router-dom';
import Hero from './components/Hero';
import { CartProvider } from './contexts/cartContext';
import Footer from './components/Footer';
import Cpy from './components/Cpy';
import './css/style.css'
import './css/responsive.css'
import './css/bootstrap.css'

const App = () => {
  return (
<CartProvider>
    <Hero />
    <Outlet />
    <div style={{position: 'relative', bottom: 0, width: '100%'}}>
    <Footer />
    <Cpy />
    </div>
</CartProvider>

  )
}

export default App