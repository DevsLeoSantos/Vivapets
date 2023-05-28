//Bibliotecas
import React from 'react';

//Estilos
import "./CardProducts.css"

interface PropsCardProducts {
    img: any;
    imgBg: any;
    text: string;
    line: string;
}

const CardProducts = (props: PropsCardProducts) => {
    return (
        <div className="ConteinerMain__CardProducts">
            <div className=" swing Conteiner__CardProducts">
                <div className="CardProducts" style={{backgroundImage: `url(${props.imgBg})`}}>
                    <img className='CardProducts_Animal'src={props.img} alt="img Animais"/>
                </div>
                <h1>{props.text}</h1>
                <p>{props.line}</p>
                <a href="/login">Conheca-os</a>
            </div>
        </div>
    )
}
export default CardProducts;