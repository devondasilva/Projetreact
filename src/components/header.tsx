import React from 'react';
import img3 from '../../public/img3.jpg';

const Header: React.FC = () => {
  return (
    <header style={{ backgroundImage:"url('./first.jpg')", backgroundRepeat: "no-repeat", backgroundSize:"cover", backgroundColor:"black"}}>
        <div className='wrapper' >
            <a href="/"><img src="logo.png" alt="Logo" className='logo' 
                onClick={()=>{
                    alert("Devon t'es trop cool!");
                }}
            />
            </a>
            <nav className='navbar'>
                <ul>
                    <li><a href="/AboutUs">About Us</a></li>
                    <li><a href="/Living">Living Room</a></li>
                    <li><a href="/Kitchen">Kitchen</a></li>
                    <li><a href="/Outdoor">Outdoors</a></li>
                    <li><a href="/Contact">Contact</a></li>
                </ul>
            </nav>
            <div className='contenant' style={{textAlign:"center"}}>
                <h1>Coming Home Never<br/>Felt So Good!</h1>
                <p><i>Quam a diamlorem explicabo quos fugit, ut aliquam modi.</i></p>
                <button style={{ boxShadow:"none"}}>Find your style</button>
            </div>
        </div>
    </header>
  );
};

export default Header;
