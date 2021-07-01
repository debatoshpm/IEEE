import React from "react";
import logo from "../assets/images/logo.png";
import "./About.css";
import slide1 from "../assets/images/slide1.png";

const About = () => {
  return (
    <React.Fragment>
      <div className="container">
        <img src={logo} className="mainStartHead" alt="" />
        <p className="about-head">About Us</p>
        <br />
        <br />
        <p className="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          omnis cupiditate molestias? Sint dicta ducimus natus molestiae
          voluptatibus molestias temporibus asperiores ad sunt, quis alias
          cumque id veniam aspernatur sequi aut recusandae? Nam, facere vitae
          nobis placeat nihil voluptas? Reiciendis consequuntur porro quam nemo
          aliquam at soluta eius harum quisquam ipsam, voluptates consequatur,
          unde illo. Quod autem voluptas eligendi est.
        </p>
        <p className="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          officia molestias quibusdam blanditiis facilis distinctio.
          Dignissimos, impedit vero? Minus reprehenderit ea sapiente omnis
          itaque eaque officiis soluta nemo. Doloribus aspernatur veniam nemo,
          necessitatibus ab reiciendis esse nihil vitae blanditiis explicabo
          ratione beatae illo repudiandae accusantium possimus aliquid dolore,
          dolorum voluptatem!
        </p>
        <p className="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          officia molestias quibusdam blanditiis facilis distinctio.
          Dignissimos, impedit vero? Minus reprehenderit ea sapiente omnis
          itaque eaque officiis soluta nemo. Doloribus aspernatur veniam nemo,
          necessitatibus ab reiciendis esse nihil vitae blanditiis explicabo
          ratione beatae illo repudiandae accusantium possimus aliquid dolore,
          dolorum voluptatem!
        </p>
        <p className="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          officia molestias quibusdam blanditiis facilis distinctio.
          Dignissimos, impedit vero? Minus reprehenderit ea sapiente omnis
          itaque eaque officiis soluta nemo. Doloribus aspernatur veniam nemo,
          necessitatibus ab reiciendis esse nihil vitae blanditiis explicabo
          ratione beatae illo repudiandae accusantium possimus aliquid dolore,
          dolorum voluptatem!
        </p>
        <br />
        <br />
        <p className="about-head">Our Societies</p>
        <br />
        <br />
        <div className="row">
          <div className="col-8">
            <p className="about-text">Computer Intelligence Society</p>
            <p className="about-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
              delectus. Deserunt, odio dolore. Adipisci officia sed molestiae!
              Sint, similique sunt! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Esse nesciunt distinctio alias fugiat. Magnam
              voluptas, quibusdam illum hic ab doloremque?
            </p>
          </div>
          <div className="col-4">
            <img src={slide1} className="about-img" alt="" />
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
              delectus. Deserunt, odio dolore. Adipisci officia sed molestiae!
              Sint, similique sunt! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Esse nesciunt distinctio alias fugiat. Magnam
              voluptas, quibusdam illum hic ab doloremque?
            </p>
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col-8">
            <p className="about-text">Computer Intelligence Society</p>
            <p className="about-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
              delectus. Deserunt, odio dolore. Adipisci officia sed molestiae!
              Sint, similique sunt! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Esse nesciunt distinctio alias fugiat. Magnam
              voluptas, quibusdam illum hic ab doloremque?
            </p>
          </div>
          <div className="col-4">
            <img src={slide1} className="about-img" alt="" />
          </div>
        </div>
      </div>
      <br />
      <br />
    </React.Fragment>
  );
};

export default About;
