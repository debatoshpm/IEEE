import React from "react";
import "./Events.css";

const Events = () => {
  return (
    <React.Fragment>
      <div className="container">
        <br />
        <div className="row example-centered">
          <div className="col-md-12 example-title">
            <h2>Events Timeline</h2>
          </div>
          <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 mt-1">
            <ul className="timeline timeline-centered">
              <li className="timeline-item period">
                <div className="timeline-info"></div>
                <div className="timeline-content">
                  <h2 className="timeline-title">April 2021</h2>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-info">
                  <span>April 10, 2021</span>
                </div>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3 className="timeline-title">
                    IBM Quantum 101 and Qiskit Translation
                  </h3>
                  <p>
                    Basics of Quantum Computing | Qiskit Translation Project by
                    IBM | Hoow to contribute to the Quantum Community
                  </p>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-info">
                  <span>April 17, 2021</span>
                </div>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3 className="timeline-title">Lets Code Quantum</h3>
                  <p>
                    The use of quantum mechanical principles to perform
                    challenging computation tasks is called quantum computation.
                    Quantuum phenomenon like entanglement and superposition
                    makes it possible for low cot computation to happen.
                  </p>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-info">
                  <span>April 24, 2021</span>
                </div>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3 className="timeline-title">
                    Quantum Mechanics to Quantum Computing
                  </h3>
                  <p>
                    There are many misunderstandings and misconceptions about
                    quantum physics and computing due to their complexity. the
                    talk will present the history of quantum mechanics and
                    quantum computation to improve the understanding of the
                    subject starting from the double-slit experiment to the
                    first quantum algorithm.
                  </p>
                </div>
              </li>
              <li className="timeline-item period">
                <div className="timeline-info"></div>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h2 className="timeline-title">July 2021</h2>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-info">
                  <span>July 17, 2021</span>
                </div>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3 className="timeline-title">Invited Guest Talk Day 1</h3>
                  <p>
                    Machine Learning in Pattern Recognition and Image Processing
                    applications - Current research trends
                  </p>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-info">
                  <span>July 31, 2021</span>
                </div>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3 className="timeline-title">Invited Guest Talk Day 2</h3>
                  <p>
                    Current Tools and Software used for Data Visualization and
                    Data Science in Industry (Playing with pandas in python)
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Events;
