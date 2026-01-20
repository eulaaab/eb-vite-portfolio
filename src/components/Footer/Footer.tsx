import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFile, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  console.log("footer");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="footer py-2 footer-content">
        <div className="is-flex is-flex-direction-column is-align-items-center">
          <div className="is-flex is-justify-content-space-between">
            <div className="is-flex is-justify-content-center">
              <a
                href="https://www.linkedin.com/in/eulabengco/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="mx-3 is-size-4" />
              </a>
              <a
                href="https://github.com/eulaaab"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <FontAwesomeIcon icon={faGithub} className="mx-3 is-size-4" />
              </a>
              <FontAwesomeIcon icon={faFile} className="mx-3 is-size-4" />
            </div>
            <div
              onClick={scrollToTop}
              aria-label="Scroll to top"
              style={{ cursor: "pointer", maxHeight: "min-content" }}
              role="button"
            >
              <FontAwesomeIcon icon={faArrowUp} />
            </div>
          </div>
          <p className="is-size-7 has-text-centered" style={{ marginTop: "0.5rem" }}>
            &#128187; with &#x1F9E1; 2026 using
            <a href="https://bulma.io/" target="_blank" rel="noopener noreferrer" aria-label="Bulma website">{' '}
            Bulma</a> and <a href="https://typescriptlang.org/" target="_blank" rel="noopener noreferrer" aria-label="TypeScript website">TS</a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
