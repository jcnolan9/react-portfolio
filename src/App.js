import React from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Header from './components/Project'


function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Project />
      </div>
      <Footer />
    </div>
  );
}

export default App;
