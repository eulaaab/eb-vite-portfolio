import eula from "assets/eb.jpg";
import eulaSkydive from "assets/eb-skydive.png";
import styles from "./About.module.scss";
import cs from "classnames";
import { useIsMobile } from "hooks/useIsMobile";

const About = () => {
  const isMobile = useIsMobile();
  return (
    <div className={cs(`mb-6 is-justify-content-center`, isMobile ? styles.mobileContainer : styles.desktopContainer)}>
      <div className={`columns is-vcentered ${isMobile ? "" : styles.container}`}>
        {/* Image */}
        <div className="column is-full-mobile is-half-tablet has-text-centered">
          <figure className={cs("image", isMobile ? "is-128x128" : styles.desktopImage)} style={{ margin: "0 auto" }}>
            <img src={eula} alt="eula headshot" className="is-rounded" />
          </figure>
        </div>

        {/* Caption/Text */}
        <div className="column is-full-mobile is-half-tablet">
          <div className="content">
            <p className="is-size-5">
              {/* <p className="is-size-5"> */}
              Hi! I'm Eula, a software developer front-end focused based in
              Toronto, Canada. I enjoy building beautiful and user friendly
              websites to elevate user experience through visuals and
              interactions. I light up collaborative environments with my bright
              energy where I can learn, share and be myself. I currently work
              for EverPro, an{" "}
              <span className="dropdown is-hoverable">
                <a
                  aria-label="EverCommerce"
                  href="https://www.evercommerce.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-controls="dropdown-menu4"
                >
                  EverCommerce
                </a>
                <span className="dropdown-menu" id="dropdown-menu4" role="menu">
                  <span className="dropdown-content">
                    <span className="dropdown-item">
                      <p>EverCommerce</p>
                    </span>
                  </span>
                </span>
              </span>{" "}
              company, building{" "}
              <span>
                <a
                  href="https://pro.joistapp.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-controls="dropdown-menu4"
                >
                  {" "}
                  Joist
                </a>
              </span>
              , an invoice and estimate app as part of the web team.
            </p>
          </div>
        </div>
      </div>

      <div className={`column is-full-width is-vcentered ${isMobile ? "mb-6" : ""}`}>
        <div className="column is-full-width has-text-centered">
          <h3 className="title is-3">A little backstory...</h3>
          <figure className={cs("image", isMobile ? "is-128x128": styles.desktopImage)} style={{ margin: "0 auto" }}>
            <img src={eulaSkydive} alt="eula skydive" className="is-rounded" />
          </figure>
        </div>
        {/* <div className="column is-full-mobile is-half-tablet"> */}
        <div className="column is-full-width">
          <div className="content">
            <p className="is-size-5 block">
              I'm a highly-motivated individual who loves to explore and try new
              things. I have always been fascinated with the internet, how it
              works and decided to pursue my dream of becoming a Web Developer.
              I love the feeling of writing bits of code and see it come to life
              on a website.
            </p>
            <p className="is-size-5 block">
              The push happened when I took a professional break in 2018 and
              realized that I wanted to share my travel experiences in the web.
              While travelling, I learned the three fundamentals of the web:
              HTML, CSS, and JavaScript.
            </p>
            <p className="is-size-5 block">
              When I came back to Canada, I enrolled at BrainStation and
              graduated from their Full-time Web Development Diploma program
              (now called Software Engineering) for Winter 2020 Cohort.
            </p>
            <p className="is-size-5 block">
              When not coding, you'll find me at a concert, playing my switch
              console, globe trotting, playing guitar, or planning my next food
              adventure ✈️.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
