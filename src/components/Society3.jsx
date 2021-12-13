import React from "react";
import slide3 from "../assets/images/slide3.png";
import "./Society.css";
import Join from "./Join";

const Society = () => {
  return (
    <React.Fragment>
      <div className="container">
        <img src={slide3} className="mainStartHead" alt="" />
        <br />
        <p className="about-head">Robotics and Automation</p>
        <br />
        <br />
        <p className="about-text">
          The IEEE Robotics and Automation Society's objectives are scientific,
          literary and educational in character. The Society strives for the
          advancement of the theory and practice of robotics and automation
          engineering and science and of the allied arts and sciences, and for
          the maintenance of high professional standards among its members, all
          in consonance with the Constitution and Bylaws of the IEEE and with
          special attention to such aims within the Field of Interest of the
          Society.
        </p>
        <p className="about-text">
          Our Mission is to foster the development and facilitate the exchange
          of scientific and technological knowledge in Robotics and Automation
          that benefits members, the profession and humanity. Our Vision is to
          be the most recognized and respected global organization in Robotics
          and Automation.
        </p>
        <p className="about-text">
          RAS strives to advance innovation, education, and fundamental and
          applied research in robotics and automation. Robotics focuses on
          systems incorporating sensors and actuators that operate autonomously
          or semi-autonomously in cooperation with humans. Robotics research
          emphasizes intelligence and adaptability to cope with unstructured
          environments. Automation research emphasizes efficiency, productivity,
          quality, and reliability, focusing on systems that operate
          autonomously, often in structured environments over extended periods,
          and on the explicit structuring of such environments.
        </p>
        <p className="about-text">
          The Society provides aid in promoting close cooperation and exchange
          of technical information among its Members and Affiliates, and to this
          end holds meetings for the presentation of papers and their
          discussion, sponsors appropriate periodicals and special technical
          publications, and through its committees studies and provides for the
          needs of its members and affiliates.
        </p>
        <br />
        <br />
        <p className="about-head2">Why join Us?</p>
        <br />
        <br />
        <p className="about-text">
          The IEEE Robotics & Automation Society is a volunteer-driven society
          with over 15,000 members around the world. The RAS society aims to
          support its members by fostering the advancement of innovation,
          education, and fundamental and applied research in robotics and
          automation.
        </p>
        <p className="about-text">
          Being a member of RAS provides opportunities for the collaboration and
          exchange information with peers, communication of the latest
          technological developments, and career development possibilities.
        </p>
        <br />
        <br />
        <Join />
        <br />
        <br />
      </div>
    </React.Fragment>
  );
};

export default Society;
