import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Projects.scss';
import project1 from '../../components/Assets/5.webp';
import project2 from '../../components/Assets/3.webp';
import project3 from '../../components/Assets/4.webp';
import project4 from '../../components/Assets/6.webp';
import project5 from '../../components/Assets/7.webp';
import project6 from '../../components/Assets/8.webp';

const projects = [
  {
    id: 1,
    title: '1 | Painting',
    description: 'Painting, the expression of ideas and emotions, with the creation of certain aesthetic qualities, in a two-dimensional visual language. The elements of this language',
    images: [project1, project2, project3],
  },
  {
    id: 2,
    title: '2 | A/C',
    description: 'An air conditioner cools your home with a cold indoor coil called the evaporator. The condenser, a hot outdoor coil, releases the collected heat outside. The evaporator and condenser coils are serpentine tubing surrounded by aluminum fins.',
    images: [project3, project1, project2],
  },
  {
    id: 3,
    title: '3 | Plumbing',
    description: 'Plumbing uses pipes, valves, plumbing fixtures, tanks, and other apparatuses to convey fluids. Heating and cooling (HVAC), waste removal, and potable water delivery are among the most common uses for plumbing, but it is not limited to these applications.',
    images: [project3, project2, project1],
  },
  {
    id: 4,
    title: '4 | Electricity',
    description: 'Electricity is a type of energy that consists of the movement of electrons between two points when there is a potential difference between them, making it possible to generate what is known as an electric current.',
    images: [project4, project3, project2, project1],
  },
  {
    id: 5,
    title: '5 | Property Management',
    description: 'Property management is the daily oversight of residential, commercial, or industrial real estate by a third-party contractor. Generally, property managers take responsibility for day-to-day repairs and ongoing maintenance, security, and upkeep of properties.',
    images: [project5, project3, project2, project1],
  },
  {
    id: 6,
    title: '6 | Cleaning',
    description: 'A Cleaner, or Custodian, is responsible for keeping offices, homes, hotels or other public areas neat and organized. Their main duties include sweeping, mopping and vacuuming floors, dusting countertops, ceilings and furniture and sanitizing bathrooms, kitchens or other public areas.',
    images: [project6, project3, project2, project1],
  },
];

function Projects() {
  const location = useLocation();

  // Get the project ID from the query parameters
  const queryParams = new URLSearchParams(location.search);
  const projectId = parseInt(queryParams.get('id'), 10);

  // Scroll to the selected project when the page loads
  useEffect(() => {
    if (projectId) {
      const projectElement = document.getElementById(`project-${projectId}`);
      if (projectElement) {
        projectElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [projectId]);

  return (
    <section className="projects">
      <div className="projects-intro">
        <div className="white-box">
          <h2>Our Projects</h2>
          <p>
            This is your Project Page. It's a great opportunity to help visitors understand the context and background of your latest work.
          </p>
        </div>
      </div>
      <div className="projects-list">
        {projects.map((project, index) => (
          <React.Fragment key={project.id}>
            <div
              id={`project-${project.id}`}
              className={`project ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="project-image-slider">
                <Swiper
                  spaceBetween={10}
                  slidesPerView={1}
                  loop={true}
                  pagination={{ clickable: true }}
                  navigation={true}
                  modules={[Navigation, Pagination]}
                >
                  {project.images.map((image, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={image}
                        alt={`Project ${project.id} - Slide ${idx + 1}`}
                        className="slider-image"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
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
