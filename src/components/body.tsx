import React from "react";
import Contenant1 from "./contenant1"
import Contenants from "./contenants";
import Recherche from "./recherche";
import Tags from "../tags/tags_list";


const Body: React.FC = () => {
    
    return (
    <div className="wrapper " style={{height:"100%"}}>
        <div className="col">
            <div className="row">
                <div className="col-8 border-end mt-4">
                    <Contenant1/>
                    <Contenants/>
                </div>
                <div className="col-4">
                    <Recherche/>
                    <Tags />
                </div>
            </div>
        </div>

    </div>
    )
}

export default Body;