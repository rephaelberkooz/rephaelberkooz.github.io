import React, { ReactNode } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import picture from './images/IMG_1158.jpg'
import { Home, Resume } from './pages/index.ts'

import './App.css';

export const App = () => {
  return (
    <div style={{ background: 'lightgray' }}>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
    </div>
  )
}

const NavBar = () => {
  return (
    <div className='flex-container' style={{ backgroundColor: '#333' }}>
      <NameHomeButton />
      <nav>
        <ul>
          <a>
            <Link to='/resume'>Resume</Link>
          </a>
          <a>
            <Link to='/portfolio'>Portfolio</Link>
          </a>
        </ul>
      </nav>
    </div>
  );
}

const NameHomeButton = () => {
  return (
    <div>
      <h1>
        <Link style={{ fontSize: 'xxx-large', color: 'white', textDecoration: 'none' }} to='/'>
          Rephael Berkooz
        </Link>
      </h1>
    </div>
  );
}

const Portfolio = () => {
  return (
    // <Template>
    <h2>Portfolio</h2>
    // </Template>
  );
}


