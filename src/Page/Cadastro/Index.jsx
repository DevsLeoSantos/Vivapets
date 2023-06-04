import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Cadastro.css";

const Cadastro = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className="BotaoCadastrar" variant="link" onClick={handleShow}>
        Cadastrar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <form className="form-cadastrar">
            <h1>Criar Conta</h1>
            <input
              className="dadosa"
              type="text"
              placeholder="Nome Completo"
              required
            />
            <input
              className="dadosa"
              type="email"
              placeholder="E-mail"
              required
            />
            <input
              className="dadosa"
              type="password"
              placeholder="Senha"
              required
            />
            <button className="botao" type="submit">
              Registrar
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Cadastro;
