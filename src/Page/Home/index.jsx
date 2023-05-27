import React from "react";

//Imagens
import pet from "../../assets/pet.svg";
import spa from "../../assets/spa.svg";

import whats from "../../assets/whats1.svg";
import insta from "../../assets/insta1.svg";

import vet from "../../assets/vet.svg";
import pets from "../../assets/pets.svg";
import Dog from "../../assets/DogTelefone.svg";

//Dados
import Animais from "../../data/AnimaisDados";

//CSS
import "./Benefits.css";
import "./ConteinerProducts.css";
import "./Contact.css";

import BannerCentral from "../../Components/BannerCentral";
import CardProducts from "../../Components/CardProducts";
import Footer from "../../Components/Fotter";

const Home = () => {
  return (
    <>
      <section className="conteiner__Beneficios">
        <h1>Nossos Serviços</h1>
        <div className="logos__Beneficios">
          <div>
            <img src={pet} alt="Logo Pagamento" />
            <h3>Banho & Tosa</h3>
            <p>Muito importante para a saúde e higiene de seu animal.</p>
          </div>

          <div>
            <img src={spa} alt="Logo Devolução" />
            <h3>Spa</h3>
            <p>Traga seu animal para ter uma experiência incrível</p>
          </div>

          <div>
            <img src={vet} alt="Logo Atendimento" />
            <h3>Serviços veterinários</h3>
            <p>
              Vacinação, cirurgias e diversos procedimentos de tratamento do
              animal
            </p>
          </div>
        </div>
      </section>

      <section className="Conteiner__Products">
        <div className="Box__Text">
          <h1>Confira nossos Ultimos Clientes</h1>
          <p>
            Ver o rabo abanando e os olhinhos brilhando é o maior elogio que
            podemos receber. Nosso compromisso é proporcionar momentos de
            alegria e bem-estar para os seus melhores amigos de quatro patas.
          </p>
        </div>
        <div className="Box__Products">
          {Animais.map((Animal) => {
            const { Raca, imgbgAnimal, imagemDoAnimal, nome } = Animal;

            return (
              <CardProducts
                key={nome}
                img={imagemDoAnimal}
                imgBg={imgbgAnimal}
                text={nome}
                line={Raca}
              />
            );
          })}
        </div>
      </section>

      <BannerCentral
        text="Nossa essência é a parceria sólida com nossos pets."
        img={pets}
      />

      <section className="Conteiner_contato">
        <div className="Conteiner_img">
          <img src={Dog} alt="Dog no Telefone" />
        </div>
        <div className="Conteiner_contato_side">
          <h1>Entre em contato conosco para mais informações</h1>
          <div className="Botoes">
            <a href="#" className="Link link_Wts">
              <img src={whats} alt="Whatsapp" />
              <p>Whatsapp</p>
            </a>
            <a className="Link link_Inst">
              <img src={insta} alt="Instagram" />
              <p>Instagram</p>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
