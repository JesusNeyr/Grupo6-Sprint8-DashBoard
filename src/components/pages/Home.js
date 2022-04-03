import React from "react"
import LastProductHome from "../LastProductHome";
import CategoryHome from "../CategorysHome";
import CardHome from "../CardHome";
import Panels from "./Panels";

const Home = () => {
    const [produc1,setVariableActualizaProduc1] = useState([]);
    
    useEffect(()=>{
        fetch('/api/products/lasProduct')
        .then(response =>response.json)
        .then(data => setVariableActualizaProduc1(data))
        
        },[]);

    return ( 
        <React.Fragment>
            <Panels/>
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