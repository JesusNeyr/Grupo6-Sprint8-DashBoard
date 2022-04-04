import React,{useEffect, useState} from "react";
import ImageProduct from '../asset/images/default.jpg';


const LastProductHome = () => {

    const [product1,setVariableActualizaProduct1] = useState([])
    useEffect(()=>{
             fetch('/api/products/lastProduct')
             .then(response=>response.json)
             .then(data=> setVariableActualizaProduct1(data))
    }, [])
    console.log(product1)

    return ( 
        <React.Fragment>
            <div className="cardMorePrinImage">
                <img src={product1.imagen} alt="imagen de product" />
            </div>
            <div className="cardMorePrinTitleProduct">{product1.name}</div>
            <div className="btnDashboard">Mas info</div>
        </React.Fragment>
     );
}
//LastProductHome.defaultProps ={
//    titleProduct: 'undefined'
//}
 
export default LastProductHome;