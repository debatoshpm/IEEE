import React from "react";
import slide2 from "../assets/images/slide2.png";
import "./Society.css";
import Members from "./Members";
import Join from "./Join";

const Society = () => {
  return (
    <React.Fragment>
      <div className="container">
        <img src={slide2} className="mainStartHead" alt="" />
        <br />
        <p className="about-head">Computer Society</p>
        <br />
        <br />
        <p className="about-text">
          We Are the Home for Computer Science and Engineering Leaders The IEEE
          Computer Society is the premier source for information, inspiration,
          and collaboration in computer science and engineering. Connecting
          members worldwide, the Computer Society empowers the people who
          advance technology by delivering tools for individuals at all stages
          of their professional careers.
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
        <p className="about-head2">Why join Us?</p>
        <br />
        <br />
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
        <p className="about-head2">Our Members</p>
        <br />
        <br />
        <div className="row d-flex justify-content-center p-2">
          <Members />
          <Members />
          <Members />
          <Members />
          <Members />
          <Members />
          <Members />
          <Members />
          <Members />
          <Members />
          <Members />
          <Members />
        </div>
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
