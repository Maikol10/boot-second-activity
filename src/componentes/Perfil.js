import React from 'react';
import '../estilos/Perfil.css';
import Contador from './Contador';


function Perfil(props){
    return(
        <div className='contenedor-perfil'>
            <img className='imagen-perfil'
            src={require(`../imagenes/perfil-${props.imagen}.png`)}
            alt='Foto de desarrollador' />
        <div className='contenedor-texto-perfil'>
            <p className='nombre-perfil'>
               <strong>{props.nombre}</strong> en {props.pais}
            </p>        
        <p className='cargo-perfil'>
            {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className='texto-perfil'>"{props.perfil}" </p>
        <div className='button-content'>
        <button onClick={()=>window.open(props.linkedin, '_blank')}>
            Seguir en linkedin 
            <Contador/>
        </button>
        <button onClick={()=>window.open(props.youtube, '_blank')}>
            Seguir en Youtube
            <Contador/>
        </button>
        <button onClick={()=>window.open(props.instagram, '_blank')}>
            Seguir en Instagram
            <Contador/>
        </button>
        </div>
        </div>
        
    </div>
    );
}
export default Perfil;