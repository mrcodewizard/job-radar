import { useState } from 'react'
import reactLogo from './assets/img/react.svg';
import Header from "./components/Header/Header";

import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";

import HeaderCarousel from './components/HeaderCarousel/HeaderCarousel';
import Breadcrumb from './components/Breadcrumb/Breadcrumb';
import Footer from './components/Footer/Footer';
import AppRoutes from './routes';

function App() {

  return (
    <div className='app-root'>
      <AppRoutes />
    </div>
  )
}

export default App
