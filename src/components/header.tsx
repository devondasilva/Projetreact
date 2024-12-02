import React from 'react';
import img3 from '../../public/img3.jpg';

const Header: React.FC = () => {
  return (
    <header className="">
        <div className='wrapper' >
            <img src="logo.png" alt="Logo" className='logo'/>
            <nav>
                <ul>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Living Room</a></li>
                    <li><a href="">Kitchen</a></li>
                    <li><a href="">Outdoors</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
            <div className='contenant'>
                <h1>Coming Home Never<br/>Felt So Good!</h1>
                <p><i>Quam a diamlorem explicabo quos fugit, ut aliquam modi.</i></p>
                <button>Find your style</button>
            </div>
        </div>
    </header>
  );
};

export default Header;
