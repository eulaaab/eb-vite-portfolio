// components/ExperienceDetails.tsx
import { useParams, useNavigate } from 'react-router-dom';
import { experiences } from '../../constants/experience';
import styles from './ExperienceDetails.module.scss';
import cs from 'classnames';

interface ExperienceDetailsProps {
  // Optional: pass experiences as prop for flexibility
  experiencesData?: typeof experiences;
}


const ExperienceDetails: React.FC<ExperienceDetailsProps> = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const navigate = useNavigate();

  const experience = experiences.find(exp => exp.id === jobId);

  // Handle invalid ID
  if (!experience) {
    return (
      <div className="experience-details">
        <button
          className="back-button"
          onClick={() => navigate('/experience')}
          aria-label="Go back to experience"
        >
          ← Back to Experience
        </button>
        <p>Experience not found</p>
      </div>
    );
  }

  return (
    <div className={cs(`${styles.experienceDetails} mt-6 px-6`)}>
      {/* <button
        className="back-button"
        onClick={() => navigate('/experience')}
        aria-label="Go back to experience"
      >
        ← Back to Experience
      </button> */}

      <header className="details-header pt-6">
        <h1>{experience.company}</h1>
      </header>

      {/*  */}
      <article className="message is-dark mx-5 mt-5">
        <div className="message-header">
          <p>Key Projects I Worked On</p>
        </div>
        <article className="message">
          {experience.yearlyWork.map((yearData) => (
             <div className="message-body content mb-0" key={yearData.year}>
              <p>{yearData.year}</p>
                <ul className="projects-list">
                  {yearData.projects.map((project, index) => (
                    <li key={index}>{project}</li>
                  ))}
                </ul>
            </div>
          ))}
          </article>
      </article>
      {/*  */}

       {/*  */}
      <article className="message is-dark mx-5">
        <div className="message-header">
          <p>What My Days Look Like</p>
        </div>
         <article className="message">
          <div className="message-body">
            {experience.dayToDay?.map((dayToDay, index) => (
            <div className="content mb-0" key={index}>
              <ul className="day-to-day-list">
                <li key={index}>{dayToDay}</li>
              </ul>
            </div>
          ))}
          </div>
          </article>
      </article>
      {/*  */}

      <article className="message is-dark mx-5 mb-6">        
        <div className="message-header">
          <p>The Skills I Use</p>
        </div>
        <article className="message">
             <div className="message-body">
              {Object.entries(experience.skills).map(([category, skillsList]) => (
                <div key={category} className="skill-category">
                  <span className="category-name">{category}:</span>{' '}
                  <span className="skills-list">{skillsList.join(', ')}</span>
                </div>
              ))}
            </div>
          </article>
      </article>
      {/*  */}
    </div>
  );
};

export default ExperienceDetails;