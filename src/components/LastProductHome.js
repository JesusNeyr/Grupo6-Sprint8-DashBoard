import React from "react";
import ImageProduct from '../asset/images/default.jpg';


const LastProductHome = (props) => {
    return ( 
        <React.Fragment>
            <div className="cardMorePrinImage">
                <img src={ImageProduct} alt="imagen de product" />
            </div>
            <div className="cardMorePrinTitleProduct">{props.titleProduct}</div>
            <div className="btnDashboard">Mas info</div>
        </React.Fragment>
     );
}
LastProductHome.defaultProps ={
    titleProduct: 'undefined'
}
 
export default LastProductHome;