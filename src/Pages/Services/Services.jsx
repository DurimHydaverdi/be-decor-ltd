import React from 'react';
import './Services.scss';
import project1 from '../../components/Assets/5.webp';
import project2 from '../../components/Assets/3.webp';
import project3 from '../../components/Assets/4.webp';
import project4 from '../../components/Assets/6.webp';
import project5 from '../../components/Assets/7.webp';
import project6 from '../../components/Assets/8.webp';

function Services() {
  return (
    <section className="services">
      <div className="service-intro">
        <div className="white-box">
          <h2>Our Services</h2>
          <p>
            This is your Project Page. It's a great opportunity to help visitors understand the context and background of your latest work.
          </p>
        </div>
      </div>

      <div className="services-header">
        <div>
          <h1>Exclusive Services</h1>
          <p>
            This is your Services Page. It's a great opportunity to provide information about the services you provide.
          </p>
        </div>
        <div className="services-content">
          {/* Service Item 1 */}
          <div className="service-item">
          <img src={project1} alt="Painting Service" className="service-image" />
          <div className="service-text">
            <h2>1 | Painting</h2>
            <p>
              Professional painting services for residential and commercial properties. We ensure a high-quality finish with attention to detail.
            </p>
          </div>
        </div>


          {/* Service Item 2 */}
          <div className="service-item">
            <img src={project2} alt="A/C Service" className="service-image" />
            <div className="service-text">
            <h2>2 | A/C</h2>
            <p>
              Comprehensive air conditioning services including installation, maintenance, and repair for all types of units.
            </p>
            </div>
          </div>

          {/* Service Item 3 */}
          <div className="service-item">
            <img src={project3} alt="Plumbing Service" className="service-image" />
            <div className="service-text">
            <h2>3 | Plumbing</h2>
            <p>
              Reliable plumbing services covering everything from leak repairs to complete pipe installations.
            </p>
            </div>
          </div>

          {/* Service Item 4 */}
          <div className="service-item">
            <img src={project4} alt="Electricity Service" className="service-image" />
            <div className="service-text">
            <h2>4 | Electricity</h2>
            <p>
              Electrical services for residential and commercial projects, including wiring, repairs, and installations.
            </p>
            </div>
          </div>

          {/* Service Item 5 */}
          <div className="service-item">
            <img src={project5} alt="Property Management" className="service-image" />
            <div className="service-text">
            <h2>5 | Property Management</h2>
            <p>
              Complete property management services to ensure your property is well-maintained and profitable.
            </p>
            </div>
          </div>

          {/* Service Item 6 */}
          <div className="service-item">
            <img src={project6} alt="Cleaning Service" className="service-image" />
            <div className="service-text">
            <h2>6 | Cleaning</h2>
            <p>
              Professional cleaning services for homes, offices, and commercial spaces, ensuring a spotless environment.
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
