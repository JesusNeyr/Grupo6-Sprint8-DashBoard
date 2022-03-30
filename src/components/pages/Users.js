import React, { useEffect, useState } from "react"; 
const Users = () => {
    const [cardUsersCount,setCardUsersCount] = useState([]);
    
    useEffect(()=>{

        fetch('/api/users')
        .then(response => {
            return response.json()
        })
        .then(data => {
           
            console.log(data);
            setCardUsersCount(data.total)
        })

    },[cardUsersCount]);
    

    return ( 
        <div className="gridUserContPage">
            <div className="gridUserTitleUserPage">
                Lista de usuarios registrados
            </div>
            <div className="gridUserItemPage gridUserItemPageSubtitle">
                <div>ID</div>
                <div>Nombre</div>
                <div>Apellido</div>
                <div>Email</div>
            </div>
            <div className="gridUserItemPage">
                <div>1</div>
                <div>Usuario 1</div>
                <div>Apellido 1</div>
                <div>email@pruebas.com</div>
            </div>
            <div className="gridUserItemPage">
                <div>2</div>
                <div>Usuario 2</div>
                <div>Apellido 2</div>
                <div>email@pruebas.com</div>
            </div>
            <div className="gridUserItemPage">
                <div>3</div>
                <div>Usuario 3</div>
                <div>Apellido 3</div>
                <div>email@pruebas.com</div>
            </div>
        </div>
    );
}
 
export default Users;