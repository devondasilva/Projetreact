import React from 'react';
import {Header} from './components/header';
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
    </div>
  );
}

export default App;

