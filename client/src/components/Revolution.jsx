import React, { Component } from "react";
import slide1 from "../assets/images/slide1.png";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.png";
class Revolution extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div id="slider" className="section main_slider">
          <div className="container-fuild">
            <div className="row">
              <div
                id="rev_slider_4_1_wrapper"
                className="rev_slider_wrapper fullwidthbanner-container"
                data-alias="classicslider1"
                style={{
                  margin: "0px auto",
                  backgroundColor: "transparent",
                  padding: "0px",
                  marginTop: "0px",
                  marginBottom: "0px",
                }}
              >
                {/* <!-- START REVOLUTION SLIDER 5.0.7 auto mode --> */}
                <div
                  id="rev_slider_4_1"
                  className="rev_slider fullwidthabanner"
                  style={{ display: "none" }}
                  data-version="5.0.7"
                >
                  <ul>
                    <li
                      data-index="rs-1812"
                      data-transition="zoomin"
                      data-slotamount="7"
                      data-easein="Power4.easeInOut"
                      data-easeout="Power4.easeInOut"
                      data-masterspeed="2000"
                      data-thumb={slide1}
                      data-rotate="0"
                      data-saveperformance="off"
                      data-title="IEEE Computational Intelligence Society"
                      data-description=""
                    >
                      {/* <!-- MAIN IMAGE --> */}
                      <img
                        src={slide1}
                        alt="#"
                        data-bgposition="center center"
                        data-kenburns="on"
                        data-duration="30000"
                        data-ease="Linear.easeNone"
                        data-scalestart="100"
                        data-scaleend="120"
                        data-rotatestart="0"
                        data-rotateend="0"
                        data-offsetstart="0 0"
                        data-offsetend="0 0"
                        data-bgparallax="10"
                        className="rev-slidebg"
                        data-no-retina
                      />
                      {/* <!-- LAYERS --> */}
                      {/* <!-- LAYER NR. BG --> */}
                      <div
                        className="tp-caption tp-shape tp-shapewrapper   rs-parallaxlevel-0"
                        id="slide-270-layer-1012"
                        data-x="['center','center','center','center']"
                        data-hoffset="['0','0','0','0']"
                        data-y="['middle','middle','middle','middle']"
                        data-voffset="['0','0','0','0']"
                        data-width="full"
                        data-height="full"
                        data-whitespace="nowrap"
                        data-transform_idle="o:1;"
                        data-transform_in="opacity:0;s:1500;e:Power3.easeInOut;"
                        data-transform_out="s:300;s:300;"
                        data-start="750"
                        data-basealign="slide"
                        data-responsive_offset="on"
                        data-responsive="off"
                        style={{
                          zIndex: 5,
                          backgroundColor: "rgba(0, 0, 0, 0.25)",
                          borderColor: "rgba(0, 0, 0, 0.50)",
                        }}
                      ></div>
                      {/* <!-- LAYER NR. 1 --> */}
                      <div
                        className="tp-caption tp-shape tp-shapewrapper   tp-resizeme rs-parallaxlevel-0"
                        id="slide-18-layer-912"
                        data-x="['center','center','center','center']"
                        data-hoffset="['0','0','0','0']"
                        data-y="['middle','middle','middle','middle']"
                        data-voffset="['15','15','15','15']"
                        data-width="1300"
                        data-height="140"
                        data-whitespace="nowrap"
                        data-transform_idle="o:1;"
                        data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power4.easeInOut;"
                        data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                        data-mask_in="x:0px;y:0px;"
                        data-mask_out="x:inherit;y:inherit;"
                        data-start="2000"
                        data-responsive_offset="on"
                        style={{
                          zIndex: 5,
                          backgroundColor: "rgba(29, 29, 29, 0.85)",
                          borderColor: "rgba(0, 0, 0, 0.50)",
                        }}
                      ></div>
                      {/* <!-- LAYER NR. 2 --> */}
                      <div
                        className="tp-caption NotGeneric-Title   tp-resizeme rs-parallaxlevel-0"
                        id="slide-18-layer-112"
                        data-x="['center','center','center','center']"
                        data-hoffset="['0','0','0','0']"
                        data-y="['middle','middle','middle','middle']"
                        data-voffset="['0','0','0','0']"
                        data-fontsize="['50','40','35','25']"
                        data-lineheight="['70','70','70','70']"
                        data-width="none"
                        data-height="none"
                        data-whitespace="nowrap"
                        data-transform_idle="o:1;"
                        data-transform_in="y:[-100%];z:0;rZ:35deg;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power4.easeInOut;"
                        data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                        data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                        data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                        data-start="1000"
                        data-splitin="chars"
                        data-splitout="none"
                        data-responsive_offset="on"
                        data-elementdelay="0.05"
                        style={{ zIndex: 6, whiteSpace: "nowrap" }}
                      >
                        Computational Intelligence Society
                      </div>
                      {/* <!-- LAYER NR. 3 --> */}
                      <div
                        className="tp-caption NotGeneric-SubTitle   tp-resizeme rs-parallaxlevel-0"
                        id="slide-18-layer-412"
                        data-x="['center','center','center','center']"
                        data-hoffset="['0','0','0','0']"
                        data-y="['middle','middle','middle','middle']"
                        data-voffset="['52','51','51','31']"
                        data-width="none"
                        data-height="none"
                        data-whitespace="nowrap"
                        data-transform_idle="o:1;"
                        data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                        data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                        data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;"
                        data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                        data-start="1500"
                        data-splitin="none"
                        data-splitout="none"
                        data-responsive_offset="on"
                        style={{ zIndex: 7, whiteSpace: "nowrap" }}
                      >
                        Available in IEEE NSEC
                      </div>
                    </li>
                    <li
                      data-index="rs-181"
                      data-transition="zoomin"
                      data-slotamount="7"
                      data-easein="Power4.easeInOut"
                      data-easeout="Power4.easeInOut"
                      data-masterspeed="2000"
                      data-thumb={slide2}
                      data-rotate="0"
                      data-saveperformance="off"
                      data-title="IEEE Computer Society"
                      data-description=""
                    >
                      {/* <!-- MAIN IMAGE --> */}
                      <img
                        src={slide2}
                        alt=""
                        data-bgposition="center center"
                        data-kenburns="on"
                        data-duration="30000"
                        data-ease="Linear.easeNone"
                        data-scalestart="100"
                        data-scaleend="120"
                        data-rotatestart="0"
                        data-rotateend="0"
                        data-offsetstart="0 0"
                        data-offsetend="0 0"
                        data-bgparallax="10"
                        className="rev-slidebg"
                        data-no-retina
                      />
                      {/* <!-- LAYERS --> */}
                      {/* <!-- LAYER NR. BG --> */}
                      <div
                        className="tp-caption tp-shape tp-shapewrapper   rs-parallaxlevel-0"
                        id="slide-270-layer-101"
                        data-x="['center','center','center','center']"
                        data-hoffset="['0','0','0','0']"
                        data-y="['middle','middle','middle','middle']"
                        data-voffset="['0','0','0','0']"
                        data-width="full"
                        data-height="full"
                        data-whitespace="nowrap"
                        data-transform_idle="o:1;"
                        data-transform_in="opacity:0;s:1500;e:Power3.easeInOut;"
                        data-transform_out="s:300;s:300;"
                        data-start="750"
                        data-basealign="slide"
                        data-responsive_offset="on"
                        data-responsive="off"
                        style={{
                          zIndex: 5,
                          backgroundColor: "rgba(0, 0, 0, 0.25)",
                          borderColor: "rgba(0, 0, 0, 0.50)",
                        }}
                      ></div>
                      {/* <!-- LAYER NR. 1 --> */}
                      <div
                        className="tp-caption tp-shape tp-shapewrapper   tp-resizeme rs-parallaxlevel-0"
                        id="slide-18-layer-91"
                        data-x="['center','center','center','center']"
                        data-hoffset="['0','0','0','0']"
                        data-y="['middle','middle','middle','middle']"
                        data-voffset="['15','15','15','15']"
                        data-width="700"
                        data-height="140"
                        data-whitespace="nowrap"
                        data-transform_idle="o:1;"
                        data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power4.easeInOut;"
                        data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                        data-mask_in="x:0px;y:0px;"
                        data-mask_out="x:inherit;y:inherit;"
                        data-start="2000"
                        data-responsive_offset="on"
                        style={{
                          zIndex: 5,
                          backgroundColor: "rgba(29, 29, 29, 0.85)",
                          borderColor: "rgba(0, 0, 0, 0.50)",
                        }}
                      ></div>
                      {/* <!-- LAYER NR. 2 --> */}
                      <div
                        className="tp-caption NotGeneric-Title   tp-resizeme rs-parallaxlevel-0"
                        id="slide-18-layer-11"
                        data-x="['center','center','center','center']"
                        data-hoffset="['0','0','0','0']"
                        data-y="['middle','middle','middle','middle']"
                        data-voffset="['0','0','0','0']"
                        data-fontsize="['55','45','35','25']"
                        data-lineheight="['70','70','70','70']"
                        data-width="none"
                        data-height="none"
                        data-whitespace="nowrap"
                        data-transform_idle="o:1;"
                        data-transform_in="y:[-100%];z:0;rZ:35deg;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power4.easeInOut;"
                        data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                        data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                        data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                        data-start="1000"
                        data-splitin="chars"
                        data-splitout="none"
                        data-responsive_offset="on"
                        data-elementdelay="0.05"
                        style={{ zIndex: 6, whiteSpace: "nowrap" }}
                      >
                        Computer Society
                      </div>
                      {/* <!-- LAYER NR. 3 --> */}
                      <div
                        className="tp-caption NotGeneric-SubTitle   tp-resizeme rs-parallaxlevel-0"
                        id="slide-18-layer-41"
                        data-x="['center','center','center','center']"
                        data-hoffset="['0','0','0','0']"
                        data-y="['middle','middle','middle','middle']"
                        data-voffset="['52','51','51','31']"
                        data-width="none"
                        data-height="none"
                        data-whitespace="nowrap"
                        data-transform_idle="o:1;"
                        data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                        data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                        data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;"
                        data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                        data-start="1500"
                        data-splitin="none"
                        data-splitout="none"
                        data-responsive_offset="on"
                        style={{ zIndex: 7, whiteSpace: "nowrap" }}
                      >
                        Available in IEEE NSEC
                      </div>
                    </li>
                    <li
                      data-index="rs-18"
                      data-transition="zoomin"
                      data-slotamount="7"
                      data-easein="Power4.easeInOut"
                      data-easeout="Power4.easeInOut"
                      data-masterspeed="2000"
                      data-thumb={slide3}
                      data-rotate="0"
                      data-saveperformance="off"
                      data-title="IEEE Robotics and Automation Society"
                      data-description=""
                    >
                      {/* <!-- MAIN IMAGE --> */}
                      <img
                        src={slide3}
                        alt=""
                        data-bgposition="center center"
                        data-kenburns="on"
                        data-duration="30000"
                        data-ease="Linear.easeNone"
                        data-scalestart="100"
                        data-scaleend="120"
                        data-rotatestart="0"
                        data-rotateend="0"
                        data-offsetstart="0 0"
                        data-offsetend="0 0"
                        data-bgparallax="10"
                        className="rev-slidebg"
                        data-no-retina
                      />
                      {/* <!-- LAYERS --> */}
                      {/* <!-- LAYER NR. BG --> */}
                      <div
                        className="tp-caption tp-shape tp-shapewrapper   rs-parallaxlevel-0"
                        id="slide-270-layer-10"
                        data-x="['center','center','center','center']"
                        data-hoffset="['0','0','0','0']"
                        data-y="['middle','middle','middle','middle']"
                        data-voffset="['0','0','0','0']"
                        data-width="full"
                        data-height="full"
                        data-whitespace="nowrap"
                        data-transform_idle="o:1;"
                        data-transform_in="opacity:0;s:1500;e:Power3.easeInOut;"
                        data-transform_out="s:300;s:300;"
                        data-start="750"
                        data-basealign="slide"
                        data-responsive_offset="on"
                        data-responsive="off"
                        style={{
                          zIndex: 5,
                          backgroundColor: "rgba(0, 0, 0, 0.25)",
                          borderColor: "rgba(0, 0, 0, 0.50)",
                        }}
                      ></div>
                      {/* <!-- LAYER NR. 1 --> */}
                      <div
                        className="tp-caption tp-shape tp-shapewrapper   tp-resizeme rs-parallaxlevel-0"
                        id="slide-18-layer-9"
                        data-x="['center','center','center','center']"
                        data-hoffset="['0','0','0','0']"
                        data-y="['middle','middle','middle','middle']"
                        data-voffset="['15','15','15','15']"
                        data-width="1300"
                        data-height="140"
                        data-whitespace="nowrap"
                        data-transform_idle="o:1;"
                        data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power4.easeInOut;"
                        data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                        data-mask_in="x:0px;y:0px;"
                        data-mask_out="x:inherit;y:inherit;"
                        data-start="2000"
                        data-responsive_offset="on"
                        style={{
                          zIndex: 5,
                          backgroundColor: "rgba(29, 29, 29, 0.85)",
                          borderColor: "rgba(0, 0, 0, 0.50)",
                        }}
                      ></div>
                      {/* <!-- LAYER NR. 2 --> */}
                      <div
                        className="tp-caption NotGeneric-Title   tp-resizeme rs-parallaxlevel-0"
                        id="slide-18-layer-1"
                        data-x="['center','center','center','center']"
                        data-hoffset="['0','0','0','0']"
                        data-y="['middle','middle','middle','middle']"
                        data-voffset="['0','0','0','0']"
                        data-fontsize="['55','45','35','25']"
                        data-lineheight="['70','70','70','70']"
                        data-width="none"
                        data-height="none"
                        data-whitespace="nowrap"
                        data-transform_idle="o:1;"
                        data-transform_in="y:[-100%];z:0;rZ:35deg;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power4.easeInOut;"
                        data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                        data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                        data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                        data-start="1000"
                        data-splitin="chars"
                        data-splitout="none"
                        data-responsive_offset="on"
                        data-elementdelay="0.05"
                        style={{ zIndex: 6, whiteSpace: "nowrap" }}
                      >
                        Robotics and Automation Society
                      </div>
                      {/* <!-- LAYER NR. 3 --> */}
                      <div
                        className="tp-caption NotGeneric-SubTitle   tp-resizeme rs-parallaxlevel-0"
                        id="slide-18-layer-4"
                        data-x="['center','center','center','center']"
                        data-hoffset="['0','0','0','0']"
                        data-y="['middle','middle','middle','middle']"
                        data-voffset="['52','51','51','31']"
                        data-width="none"
                        data-height="none"
                        data-whitespace="nowrap"
                        data-transform_idle="o:1;"
                        data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                        data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                        data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;"
                        data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                        data-start="1500"
                        data-splitin="none"
                        data-splitout="none"
                        data-responsive_offset="on"
                        style={{ zIndex: 7, whiteSpace: "nowrap" }}
                      >
                        Available in IEEE NSEC
                      </div>
                    </li>
                  </ul>
                  <div className="tp-static-layers"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end section --> */}
      </React.Fragment>
    );
  }
}

export default Revolution;
