import React from "react";
import logo from '../assets/assets/logo.png';
import liv from '../assets/assets/liv.jpg';
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

export function Living(){                 
    const tab: Container[] = [
        {title: "Taciti hendrerit dis odit incidunt",date:"November 21, 2017 / ",address: "Kitchen, Living Room, Reading Room",image: liv2,descibe: "Cillum corrupti accumsan non cumque alias ipsa, platea! Mollis auctor, repellendus sagittis? Corporis dictumst mollis, curae. Eaque, quam per, praesent pretium eu non cumque animi dolorem […]",},
    ];  

    return (
        <div className="App">
                <header 
                 style={{
                    backgroundImage: `url(${liv})`,
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
                                <h1>Living Room</h1>
                                <div className="d-flex"style={{textAlign:"center", marginLeft:"500px"}}>
                                <a href='/' className='d-flex' style={{fontSize:"14px", color:"white", textAlign:"center"}}>Home<span style={{marginTop:"6px", marginLeft:"5px" ,fontSize:"12px", color:"white"}}><MdKeyboardDoubleArrowRight /></span></a>
                                <p style={{fontSize:"14px", paddingLeft:"5px"}}>Living room</p>
                                </div>
                                </div>
                        </div>
                </div>
            </header>

            <body>
                <div className="wrapper pt-5" style={{height:"100%"}}>
                    <div className="col">
                        <div className="row">
                            <div className="col-8 border-end mt-4">
                                <div className="mx-auto mb-10 max-w-fit py-3 px-2  me-5">
                                    {tab.map((cont, i) => (
                                        <div className="border-b">
                                        <CItem key={i} image={cont.image} date={cont.date} address={cont.address} title={cont.title} descibe={cont.descibe}/>
                                        </div>
                                    ))}
                                </div>
                                <Contenants/>
                                
                            </div>
                            <div className="col-4">
                                <div className='d-block mb-4 ms-4 me-4' >
                                    <div className='border p-2 mt-4'>
                                        <input type="text" placeholder='Search...' style={{width:"100%",outline:"none"}}/>
                                        <i className="fi fi-br-search"></i>
                                    </div>
                                </div>
                                <Recent_posts/>
                                <Tags />
                            </div>
                        </div>
                    </div>
                </div>
            </body>

            <div>
                <Footer/>
            </div>
        </div>
    )
}
