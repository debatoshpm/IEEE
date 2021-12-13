import React from "react";
import slide1 from "../assets/images/slide1.jpg";
import "./Society.css";
import Join from "./Join";

const Society = () => {
  return (
    <React.Fragment>
      <div className="container">
        <img src={slide1} className="mainStartHead" alt="" />
        <br />
        <p className="about-head">Computer Intelligence Society</p>
        <br />
        <br />
        <p className="about-text">
          Computational Intelligence (CI) is the theory, design, application and
          development of biologically and linguistically motivated computational
          paradigms. Traditionally the three main pillars of CI have been Neural
          Networks, Fuzzy Systems and Evolutionary Computation. However, in time
          many nature inspired computing paradigms have evolved. Thus CI is an
          evolving field and at present in addition to the three main
          constituents, it encompasses computing paradigms like ambient
          intelligence, artificial life, cultural learning, artificial endocrine
          networks, social reasoning, and artificial hormone networks. CI plays
          a major role in developing successful intelligent systems, including
          games and cognitive developmental systems. Over the last few years
          there has been an explosion of research on Deep Learning, in
          particular deep convolutional neural networks. Nowadays, deep learning
          has become the core method for artificial intelligence. In fact, some
          of the most successful AI systems are based on CI.
        </p>
        <p className="about-text">
          Using the human brain as a source of inspiration, artificial neural
          networks (NNs) are massively parallel distributed networks that have
          the ability to learn and generalize from examples. This area of
          research includes feedforward NNs, recurrent NNs, self-organizing NNs,
          deep learning, convolutional neural networks and so on.
        </p>
        <p className="about-text">
          Using the human language as a source of inspiration, fuzzy systems
          (FS) model linguistic imprecision and solve uncertain problems based
          on a generalization of traditional logic, which enables us to perform
          approximate reasoning. This area of research includes fuzzy sets and
          systems, fuzzy clustering and classification, fuzzy controllers,
          linguistic summarization, fuzzy neural networks, type 2 fuzzy sets and
          systems, and so on.
        </p>
        <p className="about-text">
          Using the biological evolution as a source of inspiration,
          evolutionary computation (EC) solves optimization problems by
          generating, evaluating and modifying a population of possible
          solutions. EC includes genetic algorithms, evolutionary programming,
          evolution strategies, genetic programming, swarm intelligence,
          differential evolution, evolvable hardware, multi-objective
          optimization and so on.
        </p>
        <br />
        <br />
        <p className="about-head2">Why join Us?</p>
        <br />
        <br />
        <p className="about-text">
          As a Professional or Graduate Student member of CIS, you will receive
          the following benefits: Online access to IEEE Computational
          Intelligence Magazine, the CIS quarterly publication that publishes
          peer-reviewed articles presenting emerging novel discoveries,
          important insights, or tutorial surveys in all areas of computational
          intelligence design and applications, in keeping with the Field of
          Interest of the IEEE Computational Intelligence Society (IEEE/CIS).
          Delivery of monthly CIS E-Newsletter, with the most up-to-date
          information about the CIS field, events and information about
          activities in the Society. Online access to our major journals.
        </p>
        <p className="about-text">
          You can participate in or organize a CIS chapter in your IEEE Section
          or Region. You are invited to join our receptions at CIS conferences
          to strengthen your network. There are many volunteer Committees and
          Subcommittees in CIS. These groups exist to promote Education, Member
          Activities, Publications, Conferences and Technical Activities. As a
          CIS member, you are eligible to be considered to serve on these
          committees.
        </p>
        <p className="about-text">
          Student Members in addition to the member benefits listed above: You
          have the opportunity to apply for an IEEE CIS Graduate Student
          Research Grant. You have the opportunity of applying to receive a
          travel grant to attend a CIS sponsored conference. You can organize or
          join a CIS Student Chapter at your university., You have the
          opportunity of finding a mentor. As an IEEE member there are many
          benefits that can help you get the most out of your membership!
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
