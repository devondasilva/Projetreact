import React from 'react';
import './App.css';
import Header from './components/header';
import Contenant1 from './components/contenant1';
import Contenants from './components/contenants';
import Recherche from './components/recherche';
import Footer from './components/footer';
import Tags from './tags/tags_list';
import Recent_posts from './posts/recent_posts';
import Body from './components/body';


function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
   {/*    
      <div style={{ backgroundImage:"url('./first.jpg')", backgroundRepeat: "no-repeat", backgroundSize:"cover", backgroundColor:"black"}}>
        <div className="wrapper">
          <Header />
          </div>
        </div>


          <div className="main-content wrapper col mt-4 pt-4" style={{display:'block'}}>
            <div className="row">
              <div className="col-8 border-end d-block" style={{height:"2000px"}}>
                <div className="col-fluid">
                  <Contenant1 />
                </div>
                <div className="col-fluid">
                  <Contenants />
                </div>
              </div>
              <div className="col-4">
              <Tags />
              </div>
            </div>  
          </div> 

          <div style={{padding:"10px"}}>
            <footer className="footer col-fluid bg-black pt-4" style={{width:"1200px"}}>
              <Footer />
            </footer>  
          </div>
          

          
*/}
    </div>
  );
}

export default App;

