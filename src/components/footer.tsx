import React from "react";



const Footer: React.FC = () => {
    return (
        <div className="bg-black">
            <div className="wrapper pt-4" style={{color: "white", height:"400px"}}>
                    <div className="col pt-4">
                        <div className="row">
                            <div className="col-4 " style={{textAlign:"center"}}>
                                <h3 className="fw-bold mb-4">ABOUT</h3>
                                <p>Nulla quis lorem ut libero malesuada feugiat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh.</p>
                            </div>
                            <div className="col-4" style={{textAlign:"center"}}>
                                <h3 className="fw-bold mb-4">SOCIAL</h3>
                                <div className="d-flex" style={{textAlign:"center", justifyContent:"center"}}>
                                    <img src="https://websitedemos.net/blog-02/?customize=template" alt="" style={{width:"30px",height:"auto", margin:"5px", color: "white"}}/>
                                    <img src="facebook.png" alt="" style={{width:"30px",height:"auto", margin:"5px", color: "white"}}/>
                                    <img src="facebook.png" alt="" style={{width:"30px",height:"auto", margin:"5px"}}/>
                                </div>
                            </div>
                            <div className="col-4" style={{textAlign:"center"}}>
                                <h3 className="fw-bold mb-4">CONTACT US</h3>
                                <p >500 Terry Francois St.
                                    <br/> San Francisco,
                                    <br/>CA 94158
                                    <br/>+1-410-555-0134 |
                                    <br/>info@example.com
                                    <br/>contact@example.com
                                </p>
                            </div>

                        </div>

                    </div>
                    <div className="d-flex">
                        <p id="copy">Copyright © 2024 Home Decor | Powered by Home Decor</p>
                        <nav>
                            <ul className="d-flex">
                                <li id="el"><a href="">About Us</a></li>
                                <li id="el"><a href="">Living Room</a></li>
                                <li id="el"><a href="">Kitchen</a></li>
                                <li id="el"><a href="">Outdoors</a></li>
                                <li id="el"><a href="">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
            </div>

            </div>
    )
}


export default Footer;