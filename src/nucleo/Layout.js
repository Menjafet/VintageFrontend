import React, { Children } from "react";
import Menu from './Menu';
import '../css.css';
import '../index.css'

//todo los parametros del Layout son props
/*estos props son la estructura de la pagina 
que siempre van a cambiar
*/
const Layout = ({
    titulo='Titulo', 
    descripcion='', 
    className, 
    children}) => (
        
    <div>    

        <div className="jumbotron">
        <Menu />
            <div className="jumbotronContainer">
                <h1 className="pt-5">{titulo}</h1>
                <h4 className="lead">{descripcion}</h4>
            </div>
            
        </div>

        <div className={className}>{children}</div>
    </div>
    

);




export default Layout;