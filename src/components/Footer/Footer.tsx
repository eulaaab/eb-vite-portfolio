import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  console.log("footer");
  return (
    <>
      <footer className="footer py-2 footer-content">
        <div className="content has-text-centered">
          <p>
            <strong>Made with &#x1F9E1; 2025 using Bulma and TS</strong>
            {/* https://bulma.io/ */}
          </p>
          <p>
            <FontAwesomeIcon icon={faLinkedinIn} className="mr-3" />
            <FontAwesomeIcon icon={faGithub} className="mr-3" />
            <FontAwesomeIcon icon={faFile} />
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
