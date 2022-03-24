import React from "react";
import HeaderTop from "./HeaderTop";
import Footer from "./Footer";
// import InfoPrin from "./InfoPrin";
// import CategoryHome from "./CategorysHome";
// import LastProductHome from "./LastProductHome";
// import CardHome from "./CardHome";
import { Route} from 'react-router-dom'
import Home from "./pages/Home";
import Users from "./pages/Users";
import '../asset/css/rightCont.css'
import Products from "./pages/Products";

function RightCont() {
  return (
    <div className="rightCont">
        <div className="contRightCont">
            <HeaderTop />
            <Route path="/" exact={true} component={Home} />
            <Route path="/users" exact={true} component={Users} />
            <Route path="/products" exact={true} component={Products} />
        </div>
        <Footer />
    </div>
  );
}

export default RightCont;
