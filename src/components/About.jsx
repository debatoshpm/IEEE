import React from "react";
import logo from "../assets/images/logo.png";
import "./About.css";
import slide1 from "../assets/images/slide1.png";
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
              delectus. Deserunt, odio dolore. Adipisci officia sed molestiae!
              Sint, similique sunt! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Esse nesciunt distinctio alias fugiat. Magnam
              voluptas, quibusdam illum hic ab doloremque?
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
              We Are the Home for Computer Science and Engineering Leaders The
              IEEE Computer Society is the premier source for information,
              inspiration, and collaboration in computer science and
              engineering. Connecting members worldwide, the Computer Society
              empowers the people who advance technology by delivering tools for
              individuals at all stages of their professional careers.
            </p>
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col-8">
            <p className="about-text">Robotics Society</p>
            <p className="about-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
              delectus. Deserunt, odio dolore. Adipisci officia sed molestiae!
              Sint, similique sunt! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Esse nesciunt distinctio alias fugiat. Magnam
              voluptas, quibusdam illum hic ab doloremque?
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
