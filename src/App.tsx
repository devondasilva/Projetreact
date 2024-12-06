import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
  RouterProviderProps,
} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Contact from './pages/contact';
import Kitchen from './pages/kitchen';
import AboutUs from './pages/aboutUs';
import Outdoor from './pages/Outdoor';
import Living from './pages/Living';


interface ChangeRoute{
  all: {
    path: string,
    element: RouterProviderProps
  }
}



const router = createBrowserRouter([
  {
    path: "/",
    element: < Home/>,
  },
  {
    path: "/Contact",
    element: < Contact/>,
    
  },
  {
    path: "/Kitchen",
    element: < Kitchen/>,
    
  },
  {
    path: "/AboutUs",
    element: < AboutUs/>,
  },
  {
    path: "/Outdoor",
    element: < Outdoor/>,
  },
  {
    path: "/Living",
    element: < Living/>,
  }
]);

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
      
    </div>
  );
}

export default App;

