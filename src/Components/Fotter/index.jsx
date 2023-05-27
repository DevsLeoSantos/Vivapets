//Imagens
import Logo from "../../assets/Logo.svg";
import Facebook from "../../assets/Facebook.svg";
import Instagram from "../../assets/Instagram.svg";
import Linkedin from "../../assets/Linkedin.svg";
import Whatsapp from "../../assets/Whatsapp.svg";

//Estilos
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="Conteiner__main_Footer">
        <div className="Conteiner__left_Footer">
          <img src={Logo} alt="Logo pets"></img>
        </div>
      
        <section className="Conteiner__center_Footer">
          <div className="Conteiner__Logos_Footer">
            <a
              href="#"
              target="_blank"
            >
              <img src={Facebook} alt="Logo Facebook"></img>
            </a>
            <a href="#" target="_blank">
              <img src={Instagram} alt="Logo Instagram"></img>
            </a>
            <a
              href="#"
              target="_blank"
            >
              <img src={Linkedin} alt="Logo Linkedin"></img>
            </a>
            <a href="#" target="_blank">
              <img src={Whatsapp} alt="Logo Whatsapp"></img>
            </a>
          </div>

          <div className="Conteiner__text_item_Footer">
            <p>Todos Direitos Reservados a Viva Pets</p>
          </div>
        </section>
        <div className="Conteiner__right_Footer">
          <a href="#">Subir ao Topo</a>
        </div>
      </div>
    </>
  );
};
export default Footer;
