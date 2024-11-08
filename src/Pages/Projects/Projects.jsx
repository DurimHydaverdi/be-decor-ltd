import React from 'react';
import './Projects.scss';
import { FaArrowRight } from 'react-icons/fa';
import project1 from '../../components/Assets/2.webp';
import project2 from '../../components/Assets/3.webp';
import project3 from '../../components/Assets/4.webp';
// import backgroundImage from '../../components/Assets/background.webp';

const projects = [
  {
    id: 1,
    title: 'Project Title 1',
    description: 'A brief description about project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: project1,
  },
  {
    id: 2,
    title: 'Project Title 2',
    description: 'A brief description about project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: project2,
  },
  {
    id: 3,
    title: 'Project Title 3',
    description: 'A brief description about project 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: project3,
  },
];

function Projects() {
  return (
    <section className="projects">
      <div className="projects-intro">
        <div className="white-box">
          <h2>Our Work</h2>
          <p>
            This is your Project Page. It's a great opportunity to help visitors understand the context and background of your latest work.
            Double-click on the text box to start editing your content and make sure to add all the relevant details you want to share.
          </p>
        </div>
      </div>
      <div className="projects-list">
        {projects.map((project, index) => (
          <React.Fragment key={project.id}>
            <div className={`project ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div
                className="project-image"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <button className="project-button">
                  View Project <FaArrowRight />
                </button>
              </div>
            </div>
            {index < projects.length - 1 && <div className="separator"></div>}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Projects;
