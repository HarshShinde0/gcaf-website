import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Background from '../Components/Background';
import { FaCalendarCheck, FaUsers, FaTrophy, FaCertificate, FaRocket, FaStar } from 'react-icons/fa';

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
        <div className="relative overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[--google-blue]/10 via-[--google-green]/5 to-[--google-yellow]/10"></div>
          
          {/* Hero Content */}
          <div className="relative flex py-20 flex-col justify-center items-center md:px-20 px-4 text-center">
            <div className="mb-12">
              {/* Cloud Icon with Enhanced Styling */}
              <div className="inline-block mb-8 p-6 bg-gradient-to-br from-[--google-blue] to-[--google-green] rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300">
                <div className="text-7xl text-white drop-shadow-lg">☁️</div>
              </div>
              
              {/* Main Title with Enhanced Typography */}
              <h1 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-[--google-blue] via-[--google-green] to-[--google-blue] bg-clip-text text-transparent leading-tight">
                Google Cloud Arcade Facilitator Program
              </h1>
              
              {/* Subtitle with Better Styling */}
              <div className="max-w-5xl mx-auto mb-12">
                <p className="text-xl md:text-2xl leading-relaxed text-[--default-font-color] font-medium opacity-90">
                  Empowering individuals to thrive in the ever-evolving world of cloud computing through hands-on learning experiences, dedicated mentorship, and a supportive community.
                </p>
              </div>
              
              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a 
                  href="https://rsvp.withgoogle.com/events/arcade-facilitator" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group relative overflow-hidden bg-gradient-to-r from-[--google-blue] to-[--google-green] text-white text-lg px-10 py-5 rounded-full font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-[--google-yellow]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[--google-green] to-[--google-blue] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center gap-3">
                    <FaCalendarCheck className="text-xl" />
                    Join the Program
                  </span>
                </a>
                
                <Link
                  to="/leaderboard"
                  className="group relative overflow-hidden border-2 border-[--google-blue] text-[--google-blue] hover:text-white text-lg px-10 py-5 rounded-full font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 bg-transparent hover:bg-[--google-blue]"
                >
                  <div className="absolute inset-0 bg-[--google-blue] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <span className="relative flex items-center gap-3">
                    <FaTrophy className="text-xl" />
                    View Leaderboard
                  </span>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-[--google-yellow]/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-[--google-green]/20 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-20 w-16 h-16 bg-[--google-blue]/20 rounded-full blur-lg"></div>
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



          {/* CTA Section */}
          <div className="text-center">
            <div className="relative overflow-hidden bg-gradient-to-r from-[--google-blue] via-[--google-green] to-[--google-blue] rounded-3xl p-12 text-white shadow-2xl">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[--google-yellow]/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[--google-red]/10 rounded-full blur-2xl"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl font-black mb-8 bg-gradient-to-r from-white to-[--google-yellow] bg-clip-text text-transparent">
                  Ready to Transform Your Cloud Career?
                </h3>
                <p className="text-xl md:text-2xl mb-10 opacity-95 max-w-4xl mx-auto font-medium leading-relaxed">
                  Join thousands of individuals learning Google Cloud technologies through our comprehensive 
                  and interactive program. Start your journey today and become a cloud computing leader!
                </p>
                
                {/* Enhanced CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <a 
                    href="https://rsvp.withgoogle.com/events/arcade-facilitator" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group relative overflow-hidden bg-white text-[--google-blue] text-lg px-12 py-5 rounded-full font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border-2 border-white hover:border-[--google-yellow] hover:bg-[--google-yellow] hover:text-white"
                  >
                    <div className="absolute inset-0 bg-[--google-yellow] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    <span className="relative flex items-center gap-3">
                      <FaCalendarCheck className="text-xl" />
                      Get Started Now
                    </span>
                  </a>
                  
                  <Link
                    to="/leaderboard"
                    className="group relative overflow-hidden border-2 border-white text-white text-lg px-12 py-5 rounded-full font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 bg-transparent hover:bg-white hover:text-[--google-blue]"
                  >
                    <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    <span className="relative flex items-center gap-3">
                      <FaTrophy className="text-xl" />
                      View Leaderboard
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GCAFPage;
