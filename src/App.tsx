import React from 'react';
import './App.css';
import Header from './components/header';
import Contenant1 from './components/contenant1';
import Contenants from './components/contenants';
import Recherche from './components/recherche';





function App() {
  return (
    <div>
      <div className="App">
          <Header />
      </div>
      <div className=' wrapper col mt-4 pt-4'>
        <div className='row'>
          <div className='col-8'>
            <div className='row-fluid'>
              <Contenant1 />
            </div>
            <div className='row-fluid'>
              <Contenants />
            </div>
            
          </div>
          <div className='col-4'>
            <Recherche />
          </div>
        </div>
           
       
        
          
      </div>
    </div>
    
  );
}

export default App;
