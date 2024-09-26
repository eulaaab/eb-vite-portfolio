import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  console.log("footer");
  return (
    <>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Made with &#x1F9E1; 2024 using Bulma and TS</strong>
            {/* https://bulma.io/ */}
          </p>
          <p>
            <FontAwesomeIcon icon={faLinkedinIn} />
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faFile} />
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
