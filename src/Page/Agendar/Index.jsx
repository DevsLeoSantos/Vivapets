import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Agendar.css";

const Agendar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const AoEntrar = (e) => {
    e.preventDefault();
    console.log('dfsa')
}



  return (
    <>
      <Button id="idAgendar" variant="link" onClick={handleShow}>
        Cadastrar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="geral">
            <form className="form">
              <h1>Agendamento</h1>
              <input className="dadosa2" type="text" placeholder="Pet" required />
              <input
                className="dadosa2"
                type="text"
                placeholder="Raça"
                required
              />
              <input className="dadosa2" type="text" placeholder="Cor" required />
              <input
                className="dadosa2"
                type="text"
                placeholder="Serviço"
                required
              />
              <input
                className="dadosa2"
                type="text"
                placeholder="Responsavel"
                required
              />
              <input
                className="dadosa2"
                type="text"
                placeholder="Telefone"
                required
              />
              <button className="botao" type="submit">
                Agendar
              </button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Agendar;
