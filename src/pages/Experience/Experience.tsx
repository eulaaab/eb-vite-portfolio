import { years, experience } from "../../constants/experience";
import classes from "./Experience.module.scss";
import cs from "classnames";
import { Link } from "react-router-dom";
import { useIsMobile } from "../../hooks/useIsMobile";

const Experience = () => {
  const isMobile = useIsMobile();

  // Extract year from startDate (e.g., "April 2020" -> "2020")
  const getYearFromDate = (dateString: string): string => {
    const yearMatch = dateString.match(/\d{4}/);
    return yearMatch ? yearMatch[0] : "";
  };

  // Handle smooth scroll to year
  const handleYearClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    year: string
  ) => {
    e.preventDefault();
    const targetId = `year-${year}`;
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Helper function to get the first word of a company name
  const getFirstWord = (text: string): string => {
    if (!text) return '';
    return text.split(' ')[0].toLowerCase();
  };

  // Precompute first occurrence index for each year
  const firstIndexByYear: Record<string, number> = {};
  experience.forEach((item, idx) => {
    const y = getYearFromDate(item.startDate);
    if (y && firstIndexByYear[y] === undefined) {
      firstIndexByYear[y] = idx;
    }
  });

  // Group adjacent entries by the same company
  const grouped = (() => {
    const groups: Array<{
      company: string;
      entries: Array<{ item: (typeof experience)[number]; index: number }>;
    }> = [];
    for (let i = 0; i < experience.length; i++) {
      const current = experience[i];
      const group = {
        company: current.company,
        entries: [{ item: current, index: i }],
      };
      while (
        i + 1 < experience.length &&
        experience[i + 1].company === current.company
      ) {
        i++;
        group.entries.push({ item: experience[i], index: i });
      }
      groups.push(group);
    }
    return groups;
  })();

  return (
    // <div className={cs(classes.experience, "mx-5")}>
    // <div className={cs(classes.experience, "mx-5 is-flex is-flex-direction-column is-justify-content-center is-align-items-center")}>
    <div className={cs(classes.experience, "mx-5 is-justify-content-center")}>
      <div>
        <h4>What I've Been Up to Throughout the Years</h4>
        <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
          <ul>
            {years?.map((year: string, index: number) => {
              return (
           <li key={index}>
                  <a
                    href={`#${year}`}
                    onClick={(e) => handleYearClick(e, year)}
                  >
                    {isMobile ? (
                      <span className="short-year">{`'${year
                        .toString()
                        .slice(2)}`}</span>
                    ) : (
                      <span className="full-year">{year}</span>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {grouped.map((group, groupIdx) => {
        const multiple = group.entries.length > 1;
        const firstWord = getFirstWord(group.company);
          
        return (
          <div key={`${group.company}-${groupIdx}`} className="my-5" style={{ width: "100%", maxWidth: "800px" }}>
            <div className="card">
              <div className="card-content">
                <div className="content">
                  <h5>{group.company}</h5>
                  {group.entries.map(({ item, index }) => {
                    const year = getYearFromDate(item.startDate);
                    const anchorId =
                      firstIndexByYear[year] === index
                        ? `year-${year}`
                        : undefined;
                    return (
                      <div key={`${group.company}-${index}`} id={anchorId}>
                        {multiple &&
                          // For consecutive entries of the same company, omit repeating the company header
                          null}
                        <p className="has-text-weight-bold">{item.position}</p>
                        <p>
                          {item.startDate} - {item.endDate}
                        </p>
                        <p>{item.description}</p>
                        {/* Divider between consecutive entries of the same company */}
                        {multiple &&
                          index !==
                            group.entries[group.entries.length - 1].index && (
                            <hr />
                          )}
                      </div>
                    );
                  })}
                </div>
                <Link to={`/experience/${firstWord}`} className="more-info-btn">
                More info
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
