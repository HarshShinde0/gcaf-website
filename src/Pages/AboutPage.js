import Backgroound from "../Components/Background";
import HarshImg from "../Images/faculty-advisors/HS3.jpg";
import AayushImg from "../Images/faculty-advisors/Aayush-Parashar.jpg";
import { FaLinkedin } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="min-h-screen py-16">
      <h2 className="text-4xl text-center font-bold mb-9 pt-16">
        Our Facilitators
      </h2>
      <div className="mt-8 flex justify-center gap-8 py-4 flex-wrap px-4">
        <div className="mcard">
          <div className="">
            <div className="member-img rounded-full mx-auto border-2">
              <img src={HarshImg} className="rounded-full" alt="Harsh Shinde" />
            </div>
            <h2 className="text-center text-2xl font-semibold mt-3">
              Harsh Shinde
            </h2>
            <p className="text-center mt-1">Software Developer @ OSGeo</p>
            <div className="flex justify-center mt-2">
              <a
                href="https://www.linkedin.com/in/harshshinde/"
                className="text-blue-600 hover:text-blue-500 mx-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
            <p className="text-center mt-1 text-sm text-gray-600">
              <a
                href="mailto:harsh@shcode.dev"
                className="text-blue-600 hover:text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                harsh@shcode.dev
              </a>
            </p>
          </div>
        </div>
        <div className="mcard">
          <div className="">
            <div className="member-img rounded-full mx-auto border-2">
              <img src={AayushImg} className="rounded-full" alt="Aayush Parashar" />
            </div>
            <h2 className="text-center text-2xl font-semibold mt-3">
              Aayush Parashar
            </h2>
            <p className="text-center mt-1">Software Engineer @ Ciena</p>
            <div className="flex justify-center mt-2">
              <a
                href="https://www.linkedin.com/in/aayush-parashar/"
                className="text-blue-500 hover:text-blue-400 mx-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
            <p className="text-center mt-1 text-sm text-gray-600">
              <a
                href="mailto:aayush@shcode.dev"
                className="text-blue-600 hover:text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                aayush@shcode.dev
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="flex py-12 flex-col justify-center items-center px-2">
        <div className="que collapse collapse-plus md:w-2/3">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">Who We Are?</div>
          <div className="collapse-content text-justify">
            <p>
              The Google Cloud Arcade Facilitator Program is a prestigious initiative 
              designed to empower individuals to thrive in the ever-evolving world of 
              cloud computing. We are a community of passionate cloud enthusiasts, 
              mentors, and learners committed to fostering innovation and excellence 
              in Google Cloud technologies. Our program brings together diverse 
              backgrounds and skill levels, creating a collaborative environment 
              where everyone can grow and contribute to the future of cloud computing.
            </p>
          </div>
        </div>
        <div className="que collapse collapse-plus md:w-2/3">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">What We Do?</div>
          <div className="collapse-content text-justify">
            <p>
              At the Google Cloud Arcade Facilitator Program, we organize comprehensive 
              training sessions, hands-on workshops, and collaborative projects focused 
              on Google Cloud technologies. Our activities include cloud infrastructure 
              design, data analytics implementation, machine learning model deployment, 
              and security best practices. We believe in practical, hands-on learning 
              and provide participants with real-world scenarios to apply their knowledge. 
              Through our structured curriculum and mentorship, we help individuals 
              build practical skills that are directly applicable in today's cloud-first world.
            </p>
          </div>
        </div>
        <div className="que collapse collapse-plus md:w-2/3">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">Our Mission</div>
          <div className="collapse-content text-justify">
            <p>
              Our mission is to democratize cloud computing knowledge and create a 
              new generation of cloud professionals who can drive digital transformation 
              across industries. We aim to bridge the gap between theoretical knowledge 
              and practical implementation by providing hands-on experience with 
              real-world cloud projects. Through our comprehensive training programs, 
              we strive to empower individuals with the skills, confidence, and 
              community support needed to excel in cloud computing careers and 
              contribute to innovative solutions that address global challenges.
            </p>
          </div>
        </div>
        <div className="que collapse collapse-plus md:w-2/3">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">Why Join Us?</div>
          <div className="collapse-content text-justify">
            <p>
              Joining the Google Cloud Arcade Facilitator Program means becoming part 
              of an elite community of cloud computing professionals and enthusiasts. 
              Whether you're a beginner exploring cloud technologies or an experienced 
              developer looking to specialize in Google Cloud, we offer a structured 
              learning path tailored to your needs. You'll gain access to cutting-edge 
              cloud technologies, learn from industry experts, build a professional 
              network, and work on projects that showcase your skills to potential 
              employers. Our program provides the foundation for a successful career 
              in the rapidly growing cloud computing industry.
            </p>
          </div>
        </div>
        <div className="que collapse collapse-plus md:w-2/3">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">Get Involved</div>
          <div className="collapse-content text-justify">
            <p>
              We welcome individuals from all backgrounds and experience levels to 
              join the Google Cloud Arcade Facilitator Program. Our inclusive 
              approach ensures that everyone, regardless of their current skill 
              level, can benefit from our comprehensive training and mentorship. 
              Stay connected with us through our events calendar, social media 
              channels, and community platforms to learn about upcoming workshops, 
              certification opportunities, and networking events. Join us in shaping 
              the future of cloud computing and unlock your potential as a cloud 
              technology leader!
            </p>
          </div>
        </div>
      </div>
      <Backgroound />
    </div>
  );
};

export default AboutPage;
