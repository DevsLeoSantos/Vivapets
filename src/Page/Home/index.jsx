import React from "react";

//Imagens
import pet from "../../assets/pet.svg";
import spa from "../../assets/spa.svg";

import whats from "../../assets/whats1.svg";
import insta from "../../assets/insta1.svg";

import vet from "../../assets/vet.svg";
import pets from "../../assets/pets.svg";
import Dog from "../../assets/DogTelefone.svg";

import DogHome from "../../assets/DogHome.png";


import Animal1 from "../../assets/Animais/Animal1.svg";
import Animal2 from "../../assets/Animais/Animal2.svg";
import Animal3 from "../../assets/Animais/Animal3.svg";



//CSS
import "./Benefits.css";
import "./ConteinerProducts.css";
import "./Contact.css";
import "./Home.css";

import BannerCentral from "../../Components/BannerCentral";
import Footer from "../../Components/Fotter";
import Header from "../../Components/Header";
import CardAnimal from "../../Components/CardAnimal";

const Home = () => {
  return (
    <>
      <Header />
      <section className="section-1">
        <div className="content-box">
          <h1>Cuidaremos de seu PET da forma que ele merece</h1>
          <p>
            Traga aqui seu animal para passar um dia em nosso SPA de PETS, onde
            terá uma experiencia incrível.
          </p>
          <button className="schedule-button">Agende já</button>
        </div>
        <div className="background-box">
          <div className="background">
            <div className="blur"></div>
            <img src={DogHome} alt="DogHome" />
          </div>
        </div>
      </section>

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

      <section className="section-3">
        <h1>Últimos Clientes</h1>
        <div className="card-list">
          <CardAnimal
            animalImage={Animal1}
            animalName="THOR"
            animalType="DOG"
            breed="PITBULL"
            color="#000"
          />

          <CardAnimal
            animalImage={Animal2}
            animalName="ZEUS"
            animalType="DOG"
            breed="ROTTWEILER"
            color="#000"
          />

          <CardAnimal
            animalImage={Animal3}
            animalName="AQUILES"
            animalType="DOG"
            breed="BULDOGUE"
            color="#000"
          />
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
