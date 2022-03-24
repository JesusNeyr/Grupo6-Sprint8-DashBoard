import React from "react";

const Users = () => {
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