import React from "react"
import InfoPrin from "../InfoPrin";
import LastProductHome from "../LastProductHome";
import CategoryHome from "../CategorysHome";
import CardHome from "../CardHome";

const Home = () => {
    return ( 
        <React.Fragment>
            <div className="contInfoPrin">
                <InfoPrin />
                <InfoPrin />
                <InfoPrin />
                </div>
            <div className="contMoreInfo">
                <CardHome>
                    <LastProductHome titleProduct="nuevo"/>
                </CardHome>
                <CardHome>
                    <CategoryHome />
                </CardHome>
            </div>
        </React.Fragment>
     );
}
 
export default Home;