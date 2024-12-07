import React from "react";
import Header from "../components/header";
import Body from "../components/body";
import liv from "../assets/assets/liv.jpg"
import logo from '../assets/assets/logo.png';
import liv2 from '../assets/assets/liv2.jpg';
import Tags from "../components/contenants/tags/tags_list";
import Recent_posts from "../components/contenants/posts/recent_posts";
import{Container,CItem} from "../components/containers/container"
import Containers from "../components/containers/containers";
import { Pagination2 } from "../components/pagination2";
import Contenants from "../components/contenants/contenants";
import Footer from "../components/footer";
import { IoArrowForward } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Kitchen: React.FC = () => {
  return (
    <div className="App">
      <header 
                 style={{
                    backgroundImage: `url("https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic26-free-img.jpg")`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundColor: "black",
                  }}>
                    
                    <div className='tout'>
                        <div className='wrapper' >
                            <a href="/"><img src="logo.png" alt="Logo" className='logo'
                            />
                            </a>
                            <nav className='navbar navbar-nav ' >
                                <ul >
                                    <li className="nav-item"><a className="nav-link" href="/AboutUs" style={{color:"white "}}>About Us</a></li>
                                    <li className="nav-item"><a className="nav-link" href="/Living" style={{color:"white "}}>Living Room</a></li>
                                    <li className="nav-item"><a className="nav-link" href="/Kitchen" style={{color:"white "}}>Kitchen</a></li>
                                    <li className="nav-item"><a className="nav-link" href="/Outdoor" style={{color:"white "}}>Outdoors</a></li>
                                    <li className="nav-item"><a className="nav-link" href="/Contact" style={{color:"white "}}>Contact</a></li>
                                </ul>
                            </nav>
                            <div className='contenant' style={{textAlign:"center"}}>
                                <h1>Kitchen</h1>
                                <p style={{padding:"7px", fontSize:"16px"}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.</p>
                                <div className="d-flex"style={{textAlign:"center", marginLeft:"500px", marginTop:"10px"}}>
                                <a href='/' className='d-flex' style={{fontSize:"14px", color:"white", textAlign:"center", }}>Home<span style={{marginTop:"6px", marginLeft:"5px" ,fontSize:"12px", color:"white"}}><MdKeyboardDoubleArrowRight /></span></a>
                                <p style={{fontSize:"14px", paddingLeft:"5px"}}>Kitchen</p>
                                </div>
                                </div>
                        </div>
                </div>
            </header>

      <Body />
      <Footer />
    </div>
  );
};

export default Kitchen;
