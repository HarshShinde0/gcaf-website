import { Link } from "react-router-dom";
import img1 from "../../Images/gcaf-site-hero.png";

const About = () => {
  return (
    <section className="About" id="about">
      <h2 data-aos="zoom-in">About Us</h2>
      <div className="sec-grid">
        <div className="grid-l">
          <p>
            Google Cloud Arcade Facilitator Program is a prestigious initiative 
            designed to empower individuals to thrive in the ever-evolving world of 
            cloud computing. Through hands-on learning experiences, dedicated mentorship, 
            and a supportive community, we are committed to nurturing the next wave 
            of cloud innovators and leaders. Our program offers comprehensive training 
            in Google Cloud technologies, from foundational concepts to advanced 
            implementations, ensuring participants gain practical skills that drive 
            real-world impact.
          </p>
          <Link to="/about" className="btn">More</Link>
        </div>
        <div className="grid-r grid-img" data-aos="fade-in" data-aos-delay="200">
        <img src={img1} alt="Google Cloud Arcade Facilitator Program Hero" />
        </div>
      </div>
    </section>
  );
};

export default About;
