import React from "react"



const Formulaire: React.FC = () => {

    return (
            <div>
                <form action="" style={{width:"100%", height:"600px", padding:"80px", backgroundColor:"white", marginBottom:"30px", marginTop:"30px"}} >
                    <h1 style={{fontSize:"25px", fontWeight:"bold"}}>Leave a comment</h1>
                    <h3 style={{marginTop:"10px"}}>Your email address will not be published. Required fields are marked *</h3>
                    <input type="text" placeholder="Type here" style={{width:"800px", height:"200px", backgroundColor:"#e7e7e7", marginTop:"30px", marginBottom:"30px", paddingLeft:"10px"}}/>
                    <div className="d-flex">
                        <input type="text" placeholder="name*" style={{marginRight:"20px", backgroundColor:"#e7e7e7", paddingLeft:"10px",paddingTop:"10px", paddingBottom:"10px", }} />
                        <input type="email" placeholder="Email" style={{marginRight:"20px", backgroundColor:"#e7e7e7", paddingLeft:"10px",paddingTop:"10px", paddingBottom:"10px"}}  />
                        <input type="website" placeholder="Website" style={{marginRight:"20px", backgroundColor:"#e7e7e7", paddingLeft:"10px",paddingTop:"10px", paddingBottom:"10px"}} />
                    </div>
                    <div style={{marginTop:"50px"}}>
                        <button style={{color:"white", backgroundColor:"#e32b2b", paddingLeft:"5px",paddingTop:"10px", paddingBottom:"10px", width:"200px"}}>POST COMMENT</button>
                    </div>
                </form>



            </div>

    )
}


export default Formulaire;