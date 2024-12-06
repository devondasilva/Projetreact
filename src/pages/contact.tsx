import React from "react";
import Header from "../components/header";
import Body from "../components/body";
import Footer from "../components/footer";
import Maps from '../components/contenants/maps'

const Contact: React.FC = () => {
    
    return (
        <div className="App">
            <Header />
            <>
            {Maps}
            </>
            <Footer />
      </div>




    )




}




export default Contact;