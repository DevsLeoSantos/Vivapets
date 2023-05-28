//Bibliotecas
import React, { useState, useContext} from "react"

import { AuthContext } from "../../Contexts/auth";

import CampoLogin from "../../Components/CampoLogin";

//Estilos
import "./Login.css"
import Cadastro from "../Cadastro/Index";



const Login = () => {

   const {authenticated, login} = useContext
   (AuthContext)


    const [userAdm, setUserAdm] = useState("");
    const [passwordAdm, setPasswordAdm] = useState("");


    const AoEntrar = (e) => {
        e.preventDefault();
        console.log('botao',userAdm, passwordAdm)
        login(userAdm,passwordAdm)
        setUserAdm("");
        setPasswordAdm("");
    }


    return (
        <div id="login">
            <form onSubmit={AoEntrar} className="dados">
                <div className="dados1">
                    <h2>Login</h2>
                </div>
                <div className="card-content">
                    <CampoLogin
                        htmlFor="User"
                        Label="Usuário"
                        Type="text"
                        Id="user"
                        Digitado={userAdm}
                        aoAlterar={(Digitado) => setUserAdm(Digitado)}
                    />
                    <CampoLogin
                        htmlFor="password"
                        Label="Senha"
                        Type="password"
                        Id="password"
                        Digitado={passwordAdm}
                        aoAlterar={(Digitado) => setPasswordAdm(Digitado)}
                    />

                </div>
                <Cadastro/>
                <div className="login">
                    <button> Entrar </button>
                    {/* <a href="#" className="recuperar_senha">Esqueceu a senha?</a> */}
                </div>

            </form>
        </div>
    )
}

export default Login;