import React from 'react';







const Contenant1: React.FC = () => {
    const contenants =[
        
        "Consectetuer vehicula ab",
        "November 21, 2017 / Kitchen, Lifestyle",
        "Consectetuer vehicula ab? Blandit? Suspendisse feugiat elementum dictum! Minus eum eveniet, praesentium elementum interdum! Sodales, metus, velit voluptatibus voluptas lorem, etiam vulputate? Aenean possimus montes fugiat"
        

    ]
  return (
    <div className='wrapper'>
        <div className='col '>
            <div className='element row-fluid'>
                <div className="element1 col-7 px-4 border-end" style={{float:"left"}}>
                    <h1 ><a href="" style={{color:"black"}}>{contenants[0]}</a></h1>
                    <p ><a href="" className='lien'>{contenants[1]}</a></p>
                    <div >
                        <img src="img2.jpg" alt="cuisine"  className="img-fluid" />
                    </div>
                    <p className='texte'>{contenants[2]}</p>
                    <a href="">Read more <i className="fi fi-rr-angle-double-right" style={{height:"2px"}}></i></a>
                </div>
            </div>
        </div>
        <div className='row'>
            
        </div>
    </div>
  )
}

export default Contenant1;