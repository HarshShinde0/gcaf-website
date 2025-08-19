import { Link } from "react-router-dom";

const Hero = (props) => {

  return (
    <section className="Hero">
      <div className="hero-l text-center">
        <span className="">
          <svg
            className="h-20 m-auto hero-logo"
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 192 192"
            width="150"
            height="150"
          >
            <defs></defs>
            <title>GCAF Logo</title>
            <path
              className="Logo_logoRedPart__QJGXu"
              fill="currentColor"
              d="M46.36,96.68,77,79A15.06,15.06,0,1,0,61.91,52.91L9,83.45Z"
            ></path>
            <path
              className="Logo_logoBluePart__Gg0LP"
              d="M69.43,142.11A15.07,15.07,0,0,0,77,114L24.07,83.45A15.06,15.06,0,0,0,9,109.54l52.9,30.54A15,15,0,0,0,69.43,142.11Z"
            ></path>
            <path
              className="Logo_logoYellowPart__AVkWI"
              d="M122.05,142.11a15,15,0,0,0,7.52-2l52.9-30.54L145.59,96.05,114.5,114a15.07,15.07,0,0,0,7.55,28.12Z"
            ></path>
            <path
              className="Logo_logoGreenPart__LnIju"
              d="M174.92,111.56a15.06,15.06,0,0,0,7.55-28.11l-52.9-30.54A15.06,15.06,0,0,0,114.5,79l52.9,30.54A15,15,0,0,0,174.92,111.56Z"
            ></path>
          </svg>
          <h1 className="sm:text-3xl text-2xl v-logo-text">
            Google Cloud Arcade Facilitator Program
          </h1>
        </span>
        <div className="flex flex-col gap-4 mt-6">
          <a
            href="https://rsvp.withgoogle.com/events/arcade-facilitator"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Program
          </a>
          <Link
            to="/leaderboard"
            className="btn btn-outline"
          >
            🏆 View GCAF Leaderboard
          </Link>
          <Link
            to="/gcaf"
            className="btn btn-outline"
          >
            🎮 Learn About GCAF
          </Link>
        </div>
      </div>
      <div className="hero-r">
        <div className="post-header" data-aos="fade-in" data-aos-delay="200">
          <div className="window">
            <div className="panel"></div>
            <div className="panel"></div>
            <div className="view"></div>
          </div>
          <div className="table">
            <div className="computer">
              <div className="monitor overflow-hidden bg-blue-500 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">☁️</span>
              </div>
              <div className="stand">
                <div className="monitor-shadow"></div>
              </div>
            </div>
            <div className="mouse"></div>
            <div className="keyboard"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
