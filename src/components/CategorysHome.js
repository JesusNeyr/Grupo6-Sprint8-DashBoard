import React, { useEffect, useState } from "react";


const CategoryHome = () => {
    let category = ['categoría1','categoría2','categoría3','categoría4','categoría5']
    const [estado, setState] = useState([])
    useEffect(()=>{
        fetch('/api/categories/products')
        .then(response => response.json())
        .then(data=> setState(data.productsCat.data))
    }, [])

    return ( 
        <div>
            <ul className="CardMorePrinCatUl">
                {/* <li className="CardMorePrinCatLi">Categoria 1</li>
                <li className="CardMorePrinCatLi">Categoria 2</li>
                <li className="CardMorePrinCatLi">Categoria 3</li> */}
                {estado.map((category,i) =>  
                 <li key={category + i} className="CardMorePrinCatLi">
                         <p>{category.category}</p>
                         <p>Productos:{category.productsCount}</p>
                    </li>
                    
                )}
            </ul>
        </div>
            
     );
}
 
export default CategoryHome;