import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <section className="skill" id="skills">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="skill-bx wow zoomIn">
                <h2>Skills</h2>
                <p>
                  I have experience in both frontend and backend development:
                  <br />
                  <br />
                  <b>HTML & CSS:</b> Skilled in creating responsive, user-centered layouts.
                  <br />
                  <b>SQL:</b> Proficient in database management and query optimization.
                  <br />
                  <b>C:</b> Strong foundational knowledge for efficient, system-level programming.
                  <br />
                  <b>ReactJS:</b> Experienced in building dynamic, interactive UI components.
                  <br />
                  <b>Python:</b> Versatile in web development, data analysis, and automation.
                  <br />
                  <b>Spring Boot:</b> Knowledgeable in building robust backends and APIs.
                  <br />
                  <br />
                  My skill set enables me to create high-quality, user-friendly applications while keeping performance and scalability in mind.
                </p>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="owl-carousel owl-theme skill-slider"
                >
                  <div className="item">
                    <img src={meter1} alt="Skill meter for React.JS" />
                    <h5>React.JS</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="Skill meter for SpringBoot" />
                    <h5>SpringBoot</h5>
                  </div>
                  <div className="item">
                    <img src={meter3} alt="Skill meter for SQL" />
                    <h5>SQL</h5>
                  </div>
                  <div className="item">
                    <img src={meter1} alt="Skill meter for VCS(GIT)" />
                    <h5>VCS(GIT)</h5>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="" />
      </section>
    </>
  );
};
