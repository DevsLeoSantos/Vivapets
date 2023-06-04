//Estilos
import "./CampoLogin.css"

const CampoLogin = (props) => {

    const aoDigita = (evento) => {
        props.aoAlterar(evento.target.value);
    }

    return (
        <div className="card-content-area">
            <label htmlFor={props.htmlFor}>{props.Label}</label>
            <input value = {props.Digitado} onChange={aoDigita} type={props.Type} id={props.Id} autoComplete="off" />
        </div>
    )
}

export default CampoLogin;