import { useState, useEffect } from "react";
import { years } from "../constants/experience";
import Year from "../components/Year";

const Experience = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <h4>What I've Been Up to Throughout the Years</h4>
      <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
        <ul>
          {years?.map((year: string, index: number) => {
            return (
              <li key={index}>
                <a href={`#${year}`}>
                  {isMobile ? (
                    <span className="short-year">{`'${year
                      .toString()
                      .slice(2)}`}</span>
                  ) : (
                    <span className="full-year">{year}</span>
                  )}
                </a>
                {/* <a href={`#${year}`}>{year}</a> */}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Experience;
