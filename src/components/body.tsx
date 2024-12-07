import React from "react";
import Contenant1 from "./contenants/contenant1";
import Contenants from "./contenants/contenants";
import Recherche from "./contenants/recherche";
import Recent_posts from "./contenants/posts/recent_posts";
import Tags from "./contenants/tags/tags_list";
import Formulaire from "./formulaire";


const Body: React.FC = () => {
    
    return (
    <div className="wrapper " style={{height:"100%"}}>
        <div className="col">
            <div className="row">
                <div className="col-8 border-end mt-4">
                    <Contenant1 />
                    <Contenants />
                </div>
                <div className="col-4">
                    <Recherche/>
                    <Tags />
                </div>
            </div>
        </div>
        <div>
        </div>
    </div>




    )




}




export default Body;