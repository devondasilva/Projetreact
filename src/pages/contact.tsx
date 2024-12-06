import React from "react";
import {Header} from "../components/header";
import Footer from "../components/footer";
import MyComponent from "../components/contenants/maps";
const Contact: React.FC = () => {
    
    return (
        <div className="App">
            <Header />
            <>
            <MyComponent />
            </>
            <Footer />
      </div>
    )
}

export default Contact;