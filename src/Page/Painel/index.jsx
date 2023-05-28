import React, { useEffect, useState } from "react";
import "./Painel.css";

//Dados
import Serviços from "../../data/ServiçosDados";
let Fila = (Serviços.length)
function Painel() {
  const [viewMode, setViewMode] = useState("project-boxes jsGridView");
  const [viewBlocosMode, setViewBlocosMode] = useState(
    "view-btn grid-view active"
  );
  const [viewListaMode, setViewListaMode] = useState("view-btn list-view");

  const Lista = () => {
    setViewMode("project-boxes jsListView");
    setViewBlocosMode("view-btn grid-view");
    setViewListaMode("view-btn list-view active");
  };

  const add = () => {
    console.log("add");
  };
  const Sair = () => {
    console.log("Sair");
  };
  const Delete = (id) => {
    console.log(id);
  };
  
  
  

  const blocos = () => {
    setViewMode("project-boxes jsGridView");
    setViewBlocosMode("view-btn grid-view active");
    setViewListaMode("view-btn list-view");
  };

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); 

    return () => clearInterval(intervalId);
  }, []);
  return (
    <section className="conteiner">
      <div className="app-container">
        <div className="app-header">
          <div className="app-header-left">
            <span className="app-icon"></span>
            <p className="app-name">Painel</p>
          </div>
          <div className="app-header-right">
            <button onClick={add} className="add-btn" title="Add New Project">
              <div>
                <svg
                  className="btn-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  class="feather feather-plus"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </div>
              <p>Agendar</p>
            </button>


            <button onClick={Sair} className="add-btn sair" title="Add New Project">
              <div>
              </div>
              <p>Sair</p>
            </button>
          </div>
        </div>
        <div className="app-content">
          <div className="app-sidebar">
            <a href="" className="app-sidebar-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-calendar"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </a>
          </div>
          <div className="projects-section">
            <div className="projects-section-header">
              <p>Clientes</p>
              <p className="time">{currentDate.toLocaleString()}</p>
            </div>
            <div className="projects-section-line">
              <div className="projects-status">
                <div className="item-status">
                  <span className="status-number">{Fila}</span>
                  <span className="status-type">Pendentes</span>
                </div>
              </div>
              <div className="view-actions">
                <button
                  onClick={Lista}
                  className={viewListaMode}
                  title="List View"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-list"
                  >
                    <line x1="8" y1="6" x2="21" y2="6" />
                    <line x1="8" y1="12" x2="21" y2="12" />
                    <line x1="8" y1="18" x2="21" y2="18" />
                    <line x1="3" y1="6" x2="3.01" y2="6" />
                    <line x1="3" y1="12" x2="3.01" y2="12" />
                    <line x1="3" y1="18" x2="3.01" y2="18" />
                  </svg>
                </button>
                <button
                  onClick={blocos}
                  className={viewBlocosMode}
                  title="Grid View"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-grid"
                  >
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                  </svg>
                </button>
              </div>
            </div>
            <div className={viewMode}>
              {Serviços.map((Serviço) => {
                const { raca, pet, cor, servico, responsavel, porcent,data, id } =
                  Serviço;
                return (
                  <div className="project-box-wrapper">
                    <div
                      className="project-box"
                      style={{ backgroundColor: "#0000002b" }}
                    >
                      <div className="project-box-header">
                        <span>Inicio: {data}</span>
                        <div className="more-wrapper">
                          <button onClick={() => Delete(id)} className="project-btn-more"><img src="src/assets/lixeira.svg" alt="Excluir" /></button>
                        </div>
                      </div>

                      <div className="project-box-content-header">
                        <p className="box-content-header">{pet}</p>
                        <p className="box-content-subheader">{raca}</p>
                        <p className="box-content-subheader">{cor}</p>
                      </div>

                      <div className="box-progress-wrapper">
                        <p className="box-content-header">
                          Nome do Responsavel: {responsavel}
                        </p>
                        <p className="box-content-header">Serviço: {servico}</p>
                        <p className="box-progress-header">Progresso</p>
                        <div className="box-progress-bar">
                          <span
                            className="box-progress"
                            style={{
                              width: `${porcent}%`,
                              backgroundColor: "#5ec5dc",
                            }}
                          ></span>
                        </div>
                        <p className="box-progress-percentage">{porcent}%</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Painel;
