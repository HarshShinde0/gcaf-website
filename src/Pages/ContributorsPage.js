import Backgroound from "../Components/Background";
import PrakharImg from "../Images/faculty-advisors/Contributor_prakhar.jpg";
import { FaLinkedin } from "react-icons/fa";

const ContributorsPage = () => {
  return (
    <div className="min-h-screen py-16">
      <h2 className="text-4xl text-center font-bold mb-9 pt-16">
        Our Contributors
      </h2>
      <div className="mt-8 flex justify-center gap-8 py-4 flex-wrap px-4">
        <div className="mcard">
          <div className="">
            <div className="member-img rounded-full mx-auto border-2">
              <img src={PrakharImg} className="rounded-full" alt="Prakhar Dixit" />
            </div>
            <h2 className="text-center text-2xl font-semibold mt-3">
              Prakhar Dixit
            </h2>
            <p className="text-center mt-1">Student</p>
            <div className="flex justify-center mt-2">
              <a
                href="https://www.linkedin.com/in/prakhar-dixit21102006/"
                className="text-blue-600 hover:text-blue-500 mx-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex py-12 flex-col justify-center items-center px-2">
        <div className="que collapse collapse-plus md:w-2/3">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">About Our Contributors</div>
          <div className="collapse-content text-justify">
            <p>
              Our contributors are passionate individuals who dedicate their time and expertise 
              to make the Google Cloud Arcade Facilitator Program a success. They come from 
              diverse backgrounds and bring unique perspectives to our community. Whether 
              they're students, professionals, or enthusiasts, each contributor plays a vital 
              role in shaping the future of cloud computing education.
            </p>
          </div>
        </div>
        <div className="que collapse collapse-plus md:w-2/3">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">How to Contribute</div>
          <div className="collapse-content text-justify">
            <p>
              We welcome contributions from individuals at all skill levels. Whether you're 
              interested in content creation, technical development, community management, 
              or event organization, there's a place for you in our program. Our contributors 
              work on various aspects including website development, content curation, 
              technical documentation, and community engagement initiatives.
            </p>
          </div>
        </div>
        <div className="que collapse collapse-plus md:w-2/3">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">Recognition & Benefits</div>
          <div className="collapse-content text-justify">
            <p>
              Contributors to our program receive recognition for their valuable contributions, 
              opportunities to network with industry professionals, hands-on experience with 
              cutting-edge cloud technologies, and the satisfaction of helping others learn 
              and grow in the field of cloud computing. We believe in acknowledging and 
              rewarding the efforts of our community members.
            </p>
          </div>
        </div>
        <div className="que collapse collapse-plus md:w-2/3">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">Join Our Team</div>
          <div className="collapse-content text-justify">
            <p>
              If you're passionate about cloud computing and want to make a difference 
              in the community, we'd love to have you join our team of contributors. 
              Whether you're a student looking to gain experience, a professional wanting 
              to give back, or an enthusiast eager to learn and share knowledge, 
              there are many ways to get involved and contribute to our mission.
            </p>
          </div>
        </div>
      </div>
      <Backgroound />
    </div>
  );
};

export default ContributorsPage;
