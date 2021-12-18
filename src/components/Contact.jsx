import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  state = { resize: "none" };
  render() {
    return (
      <React.Fragment>
        <section className="mt-5 mb-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="google-map">
                  <iframe
                    frameBorder="0"
                    className="border-0 map"
                    title="College"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.746472949955!2d88.41274391495783!3d22.476159585232413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02722b05a38e87%3A0x276c0d30e6be12ea!2sNetaji%20Subhash%20Engineering%20College!5e0!3m2!1sen!2sin!4v1601559708914!5m2!1sen!2sin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="col-md-6">
                <p className="pb-3 h1 font-weight-light text-dark">Question?</p>
                <div>
                  <div className="pb-3">
                    <span className="h2">
                      <i className="far fa-envelope"></i>
                    </span>
                    <span className="h3 text-dark">
                      {" "}
                      Don't hesitate to contact us
                    </span>
                  </div>
                  <div className="pb-3">
                    <h5 className="">Ready for support and cooperation</h5>
                    <p className="">
                      Phone: +91 86172 66615 <br />
                      Email: neeladri.chattopadhyay@ieee.org
                    </p>
                  </div>
                </div>
                <div>
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-3" data-for="name">
                        <input
                          type="text"
                          className="form-control input"
                          name="name"
                          data-form-field="Name"
                          placeholder="Your Name"
                          required=""
                          id="name-form4-2y"
                        />
                      </div>
                      <div className="col-md-6 mb-3" data-for="phone">
                        <input
                          type="text"
                          className="form-control input"
                          name="phone"
                          data-form-field="Phone"
                          placeholder="Phone"
                          required=""
                          id="phone-form4-2y"
                        />
                      </div>
                      <div className="col-md-12 mb-3" data-for="email">
                        <input
                          type="text"
                          className="form-control input"
                          name="email"
                          data-form-field="Email"
                          placeholder="Email"
                          required=""
                          id="email-form4-2y"
                        />
                      </div>
                      <div className="col-md-12 mb-3" data-for="message">
                        <textarea
                          className="form-control input"
                          name="message"
                          rows="3"
                          data-form-field="Message"
                          placeholder="Message"
                          style={this.state}
                          id="message-form4-2y"
                        ></textarea>
                      </div>
                      <div className="input-group-btn col-md-12">
                        <button type="submit" className="btn display-4 button3">
                          SEND MESSAGE
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Contact;
