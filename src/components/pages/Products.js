import React, { useEffect, useState } from "react"; 

const Products = () => {
    const [Products,setProducts] = useState([]);
    
    useEffect(()=>{
        fetch('api/products')
        .then(response => {
            return response.json()
        })
        .then(data => {
            setProducts(data.products.data)
        })
        
    },[Products]);


    return ( 
        <div className="gridProductContPage">
            <div className="gridProductTitleProductPage">
                Lista de Productos
            </div>
            <div className="gridProductItemPage gridProductItemPageSubtitle">
                <div className="gridProductItemVisible">ID</div>
                <div className="gridProductItemVisible">Nombre</div>
                <div className="gridProductItemOculto">Precio Inividual</div>
                <div className="gridProductItemOculto">Precio Mayorista</div>
                <div className="gridProductItemOculto">Stock Maximo</div>
                <div className="gridProductItemOculto">Stock Minimo</div>
                <div className="gridProductItemOculto">Categoria</div>
                <div className="gridProductItemVisible">Editar</div>
                <div className="gridProductItemVisible">Eliminar</div>
            
            </div>
            {Products.length === 0 ? "cargando..." : null}
            { Products.map((product,i) =>{
                return (
                    <div key={product.name+i} className="gridProductItemPage">
                        <div className="gridProductItemId">{product.id}</div>
                        <div className="gridProductItemName">{product.name}</div>
                        <div className="gridProductItemOculto">{product.price_inv}</div>
                        <div className="gridProductItemOculto">{product.price_who}</div>
                        <div className="gridProductItemOculto">{product.stock_max}</div>
                        <div className="gridProductItemOculto">{product.stock_min}</div>
                        <div className="gridProductItemOculto">{product.category}</div>
                        <div className="gridProductItemVisible boton"> <button type="submit" >Editar</button></div>
                        <div className="gridProductItemVisible boton"><form action="">
                            <button type="submit" >Eliminar</button>
                        </form>
                        </div>
                        
                    </div>
                )
                })
            }
        </div>
       
    );
}
// <div className="gridUserContPage">
// <div className="gridUserTitleUserPage">
//     Lista de usuarios registrados
// </div>
// <div className="gridUserItemPage gridUserItemPageSubtitle">
//     <div>ID</div>
//     <div>Nombre</div>
//     <div>Apellido</div>
//     <div>Email</div>
// </div>
// {Users.length === 0 ? "cargando..." : null}
// { Users.map((user,i) =>{
//     return (
//         <div key={user.first_name+i} className="gridUserItemPage">
//             <div>{user.id}</div>
//             <div>{user.first_name}</div>
//             <div>{user.last_name}</div>
//             <div>{user.email}</div>
//         </div>
//     )
//     })
// } */
// </div>
export default Products;