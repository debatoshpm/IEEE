import React from "react";
import logo from "../assets/images/logo.png";
import "./About.css";
import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.png";
import slide3 from "../assets/images/slide3.png";

const About = () => {
  return (
    <React.Fragment>
      <div className="container">
        <img src={logo} className="mainStartHead" alt="" />
        <br />
        <p className="about-head">What is IEEE ?</p>
        <br />
        <br />
        <p className="about-text">
          IEEE is the world’s largest technical professional organization
          dedicated to advancing technology for the benefit of humanity. IEEE
          Student Branch of NSEC is a society affiliated to the IEEE and works
          as one of its subsidiary branch organization. Its primary goal to
          promote technological research and innovation among the students along
          with hosting webinars , hands on workshops and competitive events open
          to everyone to boost up their knowledge . It opens up new horizons to
          all its members and helps networking with both Industrial
          professionals and like minded academicians . IEEE Student Branch of
          NSEC works towards technological advancement and well being of human
          kind through its various subsidiary societies which themselves focus
          on different aspects and fields .
        </p>
        <p className="about-text">
          IEEE stands for Institute of Electrical and Electronics Engineers, is
          the world’s largest technical professional organization dedicated to
          advancing technology for the benefit of humanity.
        </p>
        <ul className="about-text p-0" style={{ listStyle: "inside" }}>
          <li>More than 419,000 members in more than 160 countries</li>
          <li>More than 124,000 Student members</li>
          <li>342 Sections in ten geographic regions worldwide</li>
          <li>
            1,834 Chapters that unite local members with similar technical
            interests
          </li>
          <li>
            3,422 Student Branches at colleges and universities in over 100
            countries
          </li>
          <li>2,600 Student Branch chapters of IEEE technical societies</li>
        </ul>
        <br />
        <br />
        <p className="about-head">Our Societies</p>
        <br />
        <br />
        <div className="row">
          <div className="col-8">
            <p className="about-text">Computer Society</p>
            <p className="about-text">
              IEEE Computer Society (sometimes abbreviated the Computer Society
              or CS) is a professional society of the Institute of Electrical
              and Electronics Engineers (IEEE). Its purpose and scope is "to
              advance the theory, practice, and application of computer and
              information processing science and technology" and the
              "professional standing of its members". The CS is the largest of
              39 technical societies organized under the IEEE Technical
              Activities Board.
            </p>
          </div>
          <div className="col-4">
            <img src={slide2} className="about-img" alt="" />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-4">
            <img src={slide1} className="about-img" alt="" />
          </div>
          <div className="col-8">
            <p className="about-text">Computer Intelligence Society</p>
            <p className="about-text">
              The IEEE Computational Intelligence Society is a professional
              society of the Institute of Electrical and Electronics Engineers
              (IEEE) focussing on "the theory, design, application, and
              development of biologically and linguistically motivated
              computational paradigms emphasizing neural networks, connectionist
              systems, genetic algorithms, evolutionary programming, fuzzy
              systems, and hybrid intelligent systems in which these paradigms
              are contained".The society was formed as the IEEE Neural Networks
              Council on November 17, 1989 with representatives from 12
              different IEEE societies. On November 21, 2001, the IEEE Neural
              Networks Council became the IEEE Neural Networks Society. In
              November 2003, it changed its name to the IEEE Computational
              Intelligence Society.
            </p>
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col-8">
            <p className="about-text">Robotics Society</p>
            <p className="about-text">
              The IEEE Robotics and Automation Society (IEEE RAS) is a
              professional society of the IEEE that supports the development and
              the exchange of scientific knowledge in the fields of robotics and
              automation, including applied and theoretical issues.The initial
              IEEE Robotics and Automation (R&A) entity, the Robotics and
              Automation Council, was founded in 1984 by a number of IEEE
              Societies including Aerospace and Electronic Systems, Circuits and
              Systems, Components, Hybrids, and Manufacturing Technology,
              Computers, Control Systems, Industrial Electronics, Industry
              Applications, and Systems, Man and Cybernetics. In 1987 the
              council became the IEEE Robotics and Automation Society.
            </p>
          </div>
          <div className="col-4">
            <img src={slide3} className="about-img" alt="" />
          </div>
        </div>
      </div>
      <br />
      <br />
    </React.Fragment>
  );
};

export default About;
