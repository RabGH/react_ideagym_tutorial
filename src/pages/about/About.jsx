/* eslint-disable jsx-a11y/img-redundant-alt */
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem nisi laborum commodo ad. Irure voluptate tempor anim est esse
        cillum. Ex elit qui qui nostrud nostrud est tempor laboris consectetur
        est adipisicing amet.
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Magna dolor irure ipsum sunt amet minim non mollit. Duis eiusmod
              in minim do elit nulla nisi officia. Incididunt nulla anim tempor
              voluptate veniam est ex qui minim laborum reprehenderit duis in.
            </p>
            <p>
              Cupidatat laboris incididunt id eu anim esse ullamco anim veniam
              anim Lorem commodo. Irure nisi ea id nostrud ea dolore nostrud ex
              sit irure occaecat minim ea ex. Aute in aliquip et ullamco nulla.
            </p>
            <p>
              Sint fugiat reprehenderit aliqua ea enim et dolore. Sint fugiat
              reprehenderit aliqua ea enim et dolore.
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Magna dolor irure ipsum sunt amet minim non mollit. Duis eiusmod
              in minim do elit nulla nisi officia. Incididunt nulla anim tempor
              voluptate veniam est ex qui minim laborum reprehenderit duis in.
            </p>
            <p>
              Cupidatat laboris incididunt id eu anim esse ullamco anim veniam
              anim Lorem commodo. Irure nisi ea id nostrud ea dolore nostrud ex
              sit irure occaecat minim ea ex. Aute in aliquip et ullamco nulla.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Magna dolor irure ipsum sunt amet minim non mollit. Duis eiusmod
              in minim do elit nulla nisi officia. Incididunt nulla anim tempor
              voluptate veniam est ex qui minim laborum reprehenderit duis in.
            </p>
            <p>
              Cupidatat laboris incididunt id eu anim esse ullamco anim veniam
              anim Lorem commodo. Irure nisi ea id nostrud ea dolore nostrud ex
              sit irure occaecat minim ea ex. Aute in aliquip et ullamco nulla.
            </p>
            <p>
              Sint fugiat reprehenderit aliqua ea enim et dolore. Sint fugiat
              reprehenderit aliqua ea enim et dolore.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
