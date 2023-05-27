//Bibliotecas
import React from 'react';

//Estilos
import "./BannerCentral.css"
import virgula from "../../assets/virgula.svg"
interface propsBannerCentral{
    text: string;
    img: any;
}

const BannerCentral = (props:propsBannerCentral) => {
    return (
        <div style={{backgroundImage: `url(${props.img})`}} className="bannerCentral">
            <img alt="virgula" src= {virgula} className="bannerCentral_Virgula"></img>
            <h1 className="bannerCentral_Text">{props.text}</h1>
        </div>
    )
}
export default BannerCentral;