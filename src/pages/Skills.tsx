import { skillCategories } from "../constants/skills";
import classes from "./Skills.module.scss";
import cs from "classnames";

const Skills = () => {
  return (
    <div className={cs(classes.skills, "mx-5")}>
      <h4>My expertise includes these modern tools and technologies including non-technical skills</h4>
      <div className="content">
        <div className="columns is-multiline">
          {skillCategories.map((category) => (
            <div className="column is-one-third" key={category.name}>
              <h5>{category.name}</h5>
              <div className="tags">
                {category.skills.map((skill) => (
                  <span className="tag" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
