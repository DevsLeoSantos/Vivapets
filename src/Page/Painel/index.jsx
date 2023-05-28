import React, { useEffect } from "react";
import "./Painel.css";

function Painel() {
  useEffect(() => {
    const handleModeSwitch = () => {
      document.documentElement.classList.toggle("dark");
      modeSwitch.classList.toggle("active");
    };

    const handleListViewClick = () => {
      gridView.classList.remove("active");
      listView.classList.add("active");
      projectsList.classList.remove("jsGridView");
      projectsList.classList.add("jsListView");
    };

    const handleGridViewClick = () => {
      gridView.classList.add("active");
      listView.classList.remove("active");
      projectsList.classList.remove("jsListView");
      projectsList.classList.add("jsGridView");
    };

    const handleMessagesBtnClick = () => {
      document.querySelector(".messages-section").classList.add("show");
    };

    const handleMessagesCloseClick = () => {
      document.querySelector(".messages-section").classList.remove("show");
    };

    document.addEventListener("DOMContentLoaded", () => {
      const modeSwitch = document.querySelector(".mode-switch");
      const listView = document.querySelector(".list-view");
      const gridView = document.querySelector(".grid-view");
      const projectsList = document.querySelector(".project-boxes");

      modeSwitch.addEventListener("click", handleModeSwitch);
      listView.addEventListener("click", handleListViewClick);
      gridView.addEventListener("click", handleGridViewClick);
      document
        .querySelector(".messages-btn")
        .addEventListener("click", handleMessagesBtnClick);
      document
        .querySelector(".messages-close")
        .addEventListener("click", handleMessagesCloseClick);
    });

    return () => {
      document.removeEventListener("DOMContentLoaded", () => {
        const modeSwitch = document.querySelector(".mode-switch");
        const listView = document.querySelector(".list-view");
        const gridView = document.querySelector(".grid-view");
        const projectsList = document.querySelector(".project-boxes");

        modeSwitch.removeEventListener("click", handleModeSwitch);
        listView.removeEventListener("click", handleListViewClick);
        gridView.removeEventListener("click", handleGridViewClick);
        document
          .querySelector(".messages-btn")
          .removeEventListener("click", handleMessagesBtnClick);
        document
          .querySelector(".messages-close")
          .removeEventListener("click", handleMessagesCloseClick);
      });
    };
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
            <button className="mode-switch" title="Switch Theme">
              <svg
                className="moon"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <defs></defs>
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
              </svg>
            </button>
            <button className="add-btn" title="Add New Project">
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
            </button>
          </div>
          <button className="messages-btn">
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
              className="feather feather-message-circle"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </button>
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
              <p className="time">December, 12</p>
            </div>
            <div className="projects-section-line">
              <div className="projects-status">
                <div className="item-status">
                  <span className="status-number">45</span>
                  <span className="status-type">In Progress</span>
                </div>
                <div className="item-status">
                  <span className="status-number">24</span>
                  <span className="status-type">Upcoming</span>
                </div>
                <div className="item-status">
                  <span className="status-number">62</span>
                  <span className="status-type">Total Projects</span>
                </div>
              </div>
              <div className="view-actions">
                <button className="view-btn list-view" title="List View">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
                <button className="view-btn grid-view active" title="Grid View">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
            <div className="project-boxes jsGridView">
              {/* <!-- Bloco de Servico --> */}
              <div className="project-box-wrapper">
                <div
                  className="project-box"
                  style={{ backgroundColor: "#fee4cb" }}
                >
                  <div className="project-box-header">
                    <span>December 10, 2020</span>
                    <div className="more-wrapper">
                      <button className="project-btn-more"></button>
                    </div>
                  </div>
                  <div className="project-box-content-header">
                    <p className="box-content-header">Web Desisgning</p>
                    <p className="box-content-subheader">Prototyping</p>
                  </div>
                  <div className="box-progress-wrapper">
                    <p className="box-progress-header">Progress</p>
                    <div className="box-progress-bar">
                      <span
                        className="box-progress"
                        style={{ width: "60%", backgroundColor: "#ff942e" }}
                      ></span>
                    </div>
                    <p className="box-progress-percentage">60%</p>
                  </div>
                </div>
              </div>
              {/* <!-- Bloco de Servico --> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Painel;
