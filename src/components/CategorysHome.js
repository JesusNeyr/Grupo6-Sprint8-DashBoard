import React from "react";

const categoryHome = () => {
    let category = ['categoría1','categoría2','categoría3','categoría4','categoría5']
    return ( 
        <div>
            <ul className="CardMorePrinCatUl">
                {/* <li className="CardMorePrinCatLi">Categoria 1</li>
                <li className="CardMorePrinCatLi">Categoria 2</li>
                <li className="CardMorePrinCatLi">Categoria 3</li> */}
                {category.map((category,i) => <li key={category+i} className="CardMorePrinCatLi">{category}</li>)}
            </ul>
        </div>
     );
}
 
export default categoryHome;