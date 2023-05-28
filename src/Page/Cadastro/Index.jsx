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
          <Modal.Title>Criar Conta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>Colocar Inputs Joao</h1>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="success" onClick={handleClose}>
            Registrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cadastro;
