import React, {useState} from 'react';

export default function Contador(){
    const [numero, setNumero] = useState(0);

    const aumentar = () =>{
        setNumero(numero+1);
    }

    const disminuir = ()=>{
        setNumero(numero-1);
    }
    return(
        <div>
            <p> {numero}</p>
            <a onClick={aumentar}>Ir</a>
        </div>
    )
}



