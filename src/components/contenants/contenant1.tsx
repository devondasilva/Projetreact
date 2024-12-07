import React from 'react';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";







const Contenant1: React.FC = () => {
    const contenants =[
        
        "Consectetuer vehicula ab",
        "November 21, 2017 / Kitchen, Lifestyle",
        "Consectetuer vehicula ab? Blandit? Suspendisse feugiat elementum dictum! Minus eum eveniet, praesentium elementum interdum! Sodales, metus, velit voluptatibus voluptas lorem, etiam vulputate? Aenean possimus montes fugiat"
        

    ]
  return (
    <div className='wrapper mt-3 '>
        <div className='col-8'>
            <div className='element pb-3 '>
                <div className="element1 pe-4" >
                    <h1 ><a href="" style={{color:"black"}}>{contenants[0]}</a></h1>
                    <p className='mb-4'><a href="" className='lien'>{contenants[1]}</a></p>
                    <div >
                        <img src="img2.jpg" alt="cuisine"  className="img-fluid" />
                    </div>
                    <p className='texte pb-4 border-bottom row'>{contenants[2]}
                        <a href='' className='d-flex mt-3' style={{fontSize:"14px", color:"red"}}>Read more  <span style={{marginTop:"6px", marginLeft:"5px" ,fontSize:"12px", color:"red"}}><MdKeyboardDoubleArrowRight /></span></a>
                    </p>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contenant1;