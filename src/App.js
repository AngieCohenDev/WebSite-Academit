import React from 'react';
import { Features, Footer, Possibility,Blog,Contenido,Header} from './containers';
import{CTA, Brand,NavBar} from './components';
import './App.css';
const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <NavBar />
        <Header />
      </div>
        <Brand />
        <Contenido />
        <Blog />
        <CTA />
        <Features />
        <Footer />
    </div>
  )
}

export default App