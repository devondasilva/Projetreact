import React from 'react';

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
                    <p className='texte pb-5 border-bottom row'>{contenants[2]}
                    <a href="" className='mt-2'>Read more<i className="fi fi-rr-angle-double-right" ></i></a>
                    </p>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contenant1;