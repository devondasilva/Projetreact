import React from "react";
import Header from "../components/header";
import Body from "../components/body";
import Footer from "../components/footer";
import Contenants from "../components/contenants/contenants";
import Recherche from "../components/recherche";
import Tags from "../components/contenants/tags/tags_list";
import Formulaire from "../components/formulaire";

const Pagecont1: React.FC = () => {
    
    return (
        <div>
            <Header/>
            <div className="wrapper " style={{height:"100%"}}>
                <div className="col">
                    <div className="row">
                        <div className="col-8 border-end mt-4">
                            <Contenants />
                        </div>
                        <div className="col-4">
                            <Recherche/>
                            <Tags />
                        </div>
                    </div>
                </div>
                <div>
                <Formulaire/>
            </div>
            </div>
           
            <Footer/>
        </div>


    )




}




export default Pagecont1;