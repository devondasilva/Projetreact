import React from "react";
import "../logos/logos.css";

const Logos: React.FC = () => {
  return (
    <section id="logos" className="logos-section" style={{backgroundColor:"#efefef", height:"150px", alignContent:"center"}}>
      <div className="logos-container d-flex">
        <img src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2021/03/client-logo-3.png" alt=""  style={{marginRight:"30px", width:"150px"}}/> 
       <img src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2021/03/client-logo-1.png" alt="Logo 2" style={{marginRight:"30px", width:"150px"}}/>
        <img src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2021/03/client-logo-5.png" alt="Logo 3" style={{marginRight:"30px" , width:"150px"}}/>
        <img src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2021/03/client-logo-4.png" alt="Logo 4" style={{marginRight:"30px" , width:"150px"}}/>
        <img src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2021/03/client-logo-3.png" alt="Logo 4" style={{marginRight:"30px" , width:"150px"}}/>
      </div>
    </section>
  );
};

export default Logos;
