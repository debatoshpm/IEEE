import React from "react";
import "./Publication.css";

const click = (e) => {
  if (e === "tab-1") {
    document.getElementById("tab-1").className = "current-content-tab";
    document.getElementById("tab-2").className = "content-tab";
    document.getElementById("tab-3").className = "content-tab";
    document.getElementById("tab-4").className = "content-tab";
    document.getElementById("button-1").className = "tab-current";
    document.getElementById("button-2").className = "";
    document.getElementById("button-3").className = "";
    document.getElementById("button-4").className = "";
  }
  if (e === "tab-2") {
    document.getElementById("tab-1").className = "content-tab";
    document.getElementById("tab-2").className = "current-content-tab";
    document.getElementById("tab-3").className = "content-tab";
    document.getElementById("tab-4").className = "content-tab";
    document.getElementById("button-1").className = "";
    document.getElementById("button-2").className = "tab-current";
    document.getElementById("button-3").className = "";
    document.getElementById("button-4").className = "";
  }
  if (e === "tab-3") {
    document.getElementById("tab-1").className = "content-tab";
    document.getElementById("tab-2").className = "content-tab";
    document.getElementById("tab-3").className = "current-content-tab";
    document.getElementById("tab-4").className = "content-tab";
    document.getElementById("button-1").className = "";
    document.getElementById("button-2").className = "";
    document.getElementById("button-3").className = "tab-current";
    document.getElementById("button-4").className = "";
  }
  if (e === "tab-4") {
    document.getElementById("tab-1").className = "content-tab";
    document.getElementById("tab-2").className = "content-tab";
    document.getElementById("tab-3").className = "content-tab";
    document.getElementById("tab-4").className = "current-content-tab";
    document.getElementById("button-1").className = "";
    document.getElementById("button-2").className = "";
    document.getElementById("button-3").className = "";
    document.getElementById("button-4").className = "tab-current";
  }
};

const Publication = () => {
  return (
    <React.Fragment>
      <div className="container">
        <p className="publication-head">Publications</p>
        <br />
        <nav className="nav-tab">
          <ul className="row">
            <li className="col-3">
              <button
                onClick={() => click("tab-1")}
                id="button-1"
                className="tab-current"
              >
                Conference
              </button>
            </li>
            <li className="col-3">
              <button onClick={() => click("tab-2")} id="button-2">
                Journal
              </button>
            </li>
            <li className="col-3">
              <button onClick={() => click("tab-3")} id="button-3">
                Book
              </button>
            </li>
            <li className="col-3">
              <button onClick={() => click("tab-4")} id="button-4">
                Others
              </button>
            </li>
          </ul>
        </nav>

        <div className="m-3">
          <section className="current-content-tab" id="tab-1">
            <p>Coming Soon - 1</p>
          </section>

          <section className="content-tab" id="tab-2">
            <p>Coming Soon - 2</p>
          </section>

          <section className="content-tab" id="tab-3">
            <p>Coming Soon - 3</p>
          </section>

          <section className="content-tab" id="tab-4">
            <p>Coming Soon - 4</p>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Publication;
