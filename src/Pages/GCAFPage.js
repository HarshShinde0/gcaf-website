import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Background from '../Components/Background';
import { FaLinkedin, FaGlobe, FaCalendarCheck, FaUsers, FaTrophy, FaCertificate, FaRocket, FaStar } from 'react-icons/fa';

const GCAFPage = () => {
  return (
    <>
      <Helmet>
        <title>Google Cloud Arcade Facilitator Program - GCAF</title>
        <meta name="description" content="Join the Google Cloud Arcade Facilitator Program - A comprehensive training initiative to empower individuals in cloud computing through hands-on learning and mentorship" />
      </Helmet>

      <Background />

      <div className="min-h-screen py-16">
        {/* Hero Section */}
        <div className="flex py-16 flex-col justify-center items-center md:px-20 px-4 text-center">
          <div className="mb-8">
            <div className="text-6xl mb-4">☁️</div>
            <h1 className="text-6xl font-bold mb-6 text-[--google-blue]">
              Google Cloud Arcade Facilitator Program
            </h1>
            <p className="text-2xl leading-relaxed text-[--default-font-color] mb-8 max-w-4xl">
              Empowering individuals to thrive in the ever-evolving world of cloud computing through hands-on learning experiences, dedicated mentorship, and a supportive community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://rsvp.withgoogle.com/events/arcade-facilitator" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary bg-[--google-blue] hover:bg-[--google-green] text-white text-lg px-8 py-4"
              >
                <FaCalendarCheck className="mr-2" />
                Join the Program
              </a>
              <Link
                to="/leaderboard"
                className="btn btn-outline border-2 border-[--google-blue] text-[--google-blue] hover:bg-[--google-blue] hover:text-white text-lg px-8 py-4"
              >
                <FaTrophy className="mr-2" />
                View Leaderboard
              </Link>
            </div>
          </div>
        </div>

        {/* Program Overview */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="bg-white rounded-3xl shadow-xl p-12 mb-16">
            <h2 className="text-4xl font-bold mb-12 text-[--google-blue] text-center">
              Program Overview
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-[--default-font-color] flex items-center">
                  <FaRocket className="mr-3 text-[--google-blue]" />
                  What is GCAF?
                </h3>
                <p className="text-lg text-[--default-font-color] leading-relaxed">
                  The Google Cloud Arcade Facilitator Program is a prestigious initiative designed to nurture the next wave of cloud innovators and leaders. 
                  Our comprehensive training program combines theoretical knowledge with practical implementation, ensuring participants gain real-world skills 
                  that drive digital transformation across industries.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-[--default-font-color] flex items-center">
                  <FaStar className="mr-3 text-[--google-blue]" />
                  Learning Approach
                </h3>
                <p className="text-lg text-[--default-font-color] leading-relaxed">
                  We believe in hands-on learning and provide a platform where participants can turn their ideas into reality. Through structured curriculum, 
                  expert mentorship, and collaborative projects, we create an environment where everyone can grow and contribute to the future of cloud computing.
                </p>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-gradient-to-br from-[--google-blue] to-[--google-green] rounded-3xl shadow-xl p-12 mb-16 text-white">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Key Features
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-3">Comprehensive Training</h3>
                <p className="text-white/90">
                  From foundational concepts to advanced implementations in Google Cloud technologies
                </p>
              </div>
              <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-3">Expert Mentorship</h3>
                <p className="text-white/90">
                  Learn from industry professionals and cloud computing experts
                </p>
              </div>
              <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                <div className="text-5xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold mb-3">Community Support</h3>
                <p className="text-white/90">
                  Join a vibrant community of cloud enthusiasts and professionals
                </p>
              </div>
            </div>
          </div>

          {/* Program Structure */}
          <div className="bg-white rounded-3xl shadow-xl p-12 mb-16">
            <h2 className="text-4xl font-bold mb-12 text-[--google-blue] text-center">
              Program Structure
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-8 bg-gradient-to-br from-[--google-blue] to-[--google-green] rounded-2xl text-white transform hover:scale-105 transition-transform">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-semibold mb-3">Foundation</h3>
                <p className="text-sm opacity-90">Core Google Cloud concepts and fundamentals</p>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-[--google-green] to-[--google-yellow] rounded-2xl text-white transform hover:scale-105 transition-transform">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-semibold mb-3">Implementation</h3>
                <p className="text-sm opacity-90">Hands-on projects and real-world scenarios</p>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-[--google-yellow] to-[--google-red] rounded-2xl text-white transform hover:scale-105 transition-transform">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-3">Advanced</h3>
                <p className="text-sm opacity-90">Specialized cloud solutions and optimization</p>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-[--google-red] to-[--google-blue] rounded-2xl text-white transform hover:scale-105 transition-transform">
                <div className="text-4xl mb-4">👑</div>
                <h3 className="text-xl font-semibold mb-3">Mastery</h3>
                <p className="text-sm opacity-90">Expert-level cloud architecture and leadership</p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-3xl shadow-xl p-12 mb-16">
            <h2 className="text-4xl font-bold mb-12 text-[--google-blue] text-center">
              Why Join GCAF?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[--google-blue] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0 mt-1">
                    <FaCertificate className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[--default-font-color]">Professional Certification</h3>
                    <p className="text-[--default-font-color]">
                      Earn recognized credentials in Google Cloud technologies
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[--google-green] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0 mt-1">
                    <FaUsers className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[--default-font-color]">Network Building</h3>
                    <p className="text-[--default-font-color]">
                      Connect with industry professionals and like-minded peers
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[--google-yellow] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0 mt-1">
                    <FaRocket className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[--default-font-color]">Career Growth</h3>
                    <p className="text-[--default-font-color]">
                      Accelerate your career in the rapidly growing cloud industry
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[--google-red] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0 mt-1">
                    <FaTrophy className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[--default-font-color]">Recognition</h3>
                    <p className="text-[--default-font-color]">
                      Get recognized for your achievements and contributions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How to Join */}
          <div className="bg-white rounded-3xl shadow-xl p-12 mb-16">
            <h2 className="text-4xl font-bold mb-12 text-[--google-blue] text-center">
              How to Join
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-[--google-blue] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0 mt-1">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-[--default-font-color]">Visit the RSVP Page</h3>
                  <p className="text-lg text-[--default-font-color]">
                    Go to the official Google Cloud Arcade Facilitator Program registration page
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-[--google-green] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0 mt-1">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-[--default-font-color]">Complete Registration</h3>
                  <p className="text-lg text-[--default-font-color]">
                    Fill out the registration form with your details and preferences
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-[--google-yellow] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0 mt-1">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-[--default-font-color]">Start Learning</h3>
                  <p className="text-lg text-[--default-font-color]">
                    Begin your cloud computing journey with our comprehensive training program
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* External Links */}
          <div className="bg-white rounded-3xl shadow-xl p-12 mb-16">
            <h2 className="text-4xl font-bold mb-12 text-[--google-blue] text-center">
              Connect With Us
            </h2>
            <div className="flex justify-center gap-8 flex-wrap">
              <a 
                href="https://rsvp.withgoogle.com/events/arcade-facilitator" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 px-8 py-4 bg-[--google-blue] text-white rounded-full hover:bg-[--google-green] transition-colors shadow-lg text-lg font-semibold"
              >
                <FaCalendarCheck className="text-xl" />
                <span>Join Program</span>
              </a>
              <a 
                href="https://go.cloudskillsboost.google/arcade" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 px-8 py-4 bg-[--google-green] text-white rounded-full hover:bg-[--google-blue] transition-colors shadow-lg text-lg font-semibold"
              >
                <FaGlobe className="text-xl" />
                <span>Arcade Platform</span>
              </a>
              <a 
                href="https://www.linkedin.com/company/google-cloud-arcade-facilitator-program-india/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 px-8 py-4 bg-[--google-yellow] text-white rounded-full hover:bg-[--google-red] transition-colors shadow-lg text-lg font-semibold"
              >
                <FaLinkedin className="text-xl" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-[--google-blue] to-[--google-green] rounded-3xl p-12 text-white shadow-xl">
              <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Cloud Career?</h3>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                Join thousands of individuals learning Google Cloud technologies through our comprehensive 
                and interactive program. Start your journey today and become a cloud computing leader!
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="https://rsvp.withgoogle.com/events/arcade-facilitator" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary bg-white text-[--google-blue] hover:bg-gray-100 text-lg px-10 py-4 font-semibold"
                >
                  <FaCalendarCheck className="mr-2" />
                  Get Started Now
                </a>
                <Link
                  to="/leaderboard"
                  className="btn btn-outline border-2 border-white text-white hover:bg-white hover:text-[--google-blue] text-lg px-10 py-4 font-semibold"
                >
                  <FaTrophy className="mr-2" />
                  View Leaderboard
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GCAFPage;
