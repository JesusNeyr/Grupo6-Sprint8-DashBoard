import React from "react";
import '../asset/css/headerLeft.css'
import { Link} from 'react-router-dom'

function HeaderLeft() {
  return (
    <ul className="headerLeft">
        <li className="headerLeftLi">GUGU</li>
        <li className="headerLeftLi"><Link className="linkNav" to='/'>Inicio</Link></li>
        <li className="headerLeftLi"><Link className="linkNav" to='/products'>Productos</Link></li>
        <li className="headerLeftLi"><Link className="linkNav" to='/users'>Usuarios</Link></li>
    </ul>
  );
}

export default HeaderLeft;
