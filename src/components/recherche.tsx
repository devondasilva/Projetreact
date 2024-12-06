import React from 'react';

interface EditProps{
    all: {
        image: string;
        titre: string;
        text: string
    }
}

const Recherche: React.FC = () => {
  return (
    <div className=' mt-3 mb-4 ms-4'>
        <div className='d-block mb-4' >
            <div className='border p-2 mt-4'>
                <input type="text" placeholder='Search...' style={{width:"100%",}}/>
                <i className="fi fi-br-search"></i>
            </div>
        </div>
        <div className='p-4 border border-4 rounded-end'>
            <div className='row'>
                <h3 style={{float:"left", fontWeight:"bold", whiteSpace:"nowrap", fontSize:"20px", marginBottom:"15px" }}>Recent Posts</h3>
            </div>
            <div className='d-flex mb-2 p-2 border-bottom'>
                <img src="img3.jpg" alt="" style={{height:"100px"}}/>
                <div className='m-2'>
                    <h3 style={{color:"red", fontSize:"15px", fontWeight:"bold"}}>Consectetuer vehicula ab</h3>
                    <p style={{fontSize:"13px"}}>In Kitchen, Lifestyle</p>
                </div>
            </div>
            <div className='d-flex mb-2 p-2 border-bottom'>
                <img src="img3.jpg" alt="" style={{height:"100px"}}/>
                <div className='m-2'>
                    <h3 style={{color:"red", fontSize:"15px", fontWeight:"bold"}}>Taciti hendrerit dis odit incidunt</h3>
                    <p style={{fontSize:"13px"}}>In Kitchen, Living Room, Reading Room</p>
                </div>
            </div>
            <div className='d-flex mb-2 p-2 border-bottom'>
                <img src="img3.jpg" alt="" style={{height:"100px"}} />
                <div className='m-2'>
                    <h3 style={{color:"red", fontSize:"15px", fontWeight:"bold"}}>Sunt doloremque blandit inven</h3>
                    <p style={{fontSize:"13px"}}>In Living Room</p>
                </div>
            </div>
            <div className='d-flex mb-2 p-2 border-bottom'>
                <img src="img3.jpg" alt="" style={{height:"100px"}}/>
                <div className='m-2'>
                    <h3 style={{color:"red", fontSize:"15px", fontWeight:"bold"}}>Fugit quaerat vulputate! Irure.</h3>
                    <p style={{fontSize:"13px"}}>In Living Room</p>
                </div>
            </div>
            <div className='d-flex mb-2 p-2'>
                <img src="img3.jpg" alt="" style={{height:"100px"}}/>
                <div className='m-2'>
                    <h3 style={{color:"red", fontSize:"15px", fontWeight:"bold"}}>Litora aptent magnam laoreet!</h3>
                    <p style={{fontSize:"13px"}}>In Living Room</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Recherche;
