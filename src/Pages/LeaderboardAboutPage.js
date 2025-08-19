import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Backgroound from "../Components/Background";

const LeaderboardAboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About GCAF Leaderboard - Google Cloud Arcade Facilitator Program</title>
        <meta
          name="description"
          content="Learn about the Google Cloud Arcade Facilitator Program leaderboard system and how it tracks participant progress and achievements."
        />
      </Helmet>

      <div className="min-h-screen py-16">
        {/* Hero Section */}
        <div className="flex py-12 flex-col justify-center items-center md:px-60 px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-[--google-blue]">
            About GCAF
          </h1>
          <p className="text-xl leading-relaxed text-[--text-secondary]">
            Google Cloud Arcade Facilitator (GCAF) is a program designed to help students learn Google Cloud technologies through interactive games and challenges.
          </p>
        </div>

        {/* Back to Leaderboard Button */}
        <div className="flex justify-center py-6">
          <Link 
            to="/leaderboard" 
            className="flex items-center gap-2 px-6 py-3 bg-[--google-blue] text-white rounded-full hover:bg-[--google-green] transition-colors shadow-lg"
          >
            <i className="fas fa-arrow-left"></i>
            <span>Back to Leaderboard</span>
          </Link>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="bg-gradient-to-r from-[--google-blue] to-[--google-green] rounded-2xl p-8 text-white mb-8">
            <h2 className="text-3xl font-bold mb-6">What is GCAF?</h2>
            <p className="text-lg leading-relaxed">
              The Google Cloud Arcade Facilitator program is an initiative that combines learning with gaming. 
              Participants complete various Google Cloud challenges, earn skill badges, and compete on leaderboards 
              to showcase their expertise in cloud technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[--surface-color] rounded-2xl p-8 border-2 border-[--border-color] hover:border-[--google-blue] transition-all duration-300 hover:shadow-xl">
              <h3 className="text-2xl font-semibold mb-6 text-[--google-blue] flex items-center gap-3">
                <i className="fas fa-trophy text-2xl"></i>
                Milestone System
              </h3>
              <ul className="space-y-3 text-[--text-secondary]">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[--google-blue] rounded-full"></span>
                  <span><span className="font-semibold text-[--default-font-color]">Milestone 1:</span> Basic achievements and skill badges</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[--google-green] rounded-full"></span>
                  <span><span className="font-semibold text-[--default-font-color]">Milestone 2:</span> Intermediate challenges completed</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[--google-yellow] rounded-full"></span>
                  <span><span className="font-semibold text-[--default-font-color]">Milestone 3:</span> Advanced skills demonstrated</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[--google-red] rounded-full"></span>
                  <span><span className="font-semibold text-[--default-font-color]">Ultimate Milestone:</span> Mastery level achieved</span>
                </li>
              </ul>
            </div>

            <div className="bg-[--surface-color] rounded-2xl p-8 border-2 border-[--border-color] hover:border-[--google-green] transition-all duration-300 hover:shadow-xl">
              <h3 className="text-2xl font-semibold mb-6 text-[--google-green] flex items-center gap-3">
                <i className="fas fa-gamepad text-2xl"></i>
                Arcade Games
              </h3>
              <ul className="space-y-3 text-[--text-secondary]">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[--google-green] rounded-full"></span>
                  <span>Interactive cloud challenges</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[--google-green] rounded-full"></span>
                  <span>Real-world scenario simulations</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[--google-green] rounded-full"></span>
                  <span>Skill badge earning opportunities</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[--google-green] rounded-full"></span>
                  <span>Competitive leaderboards</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[--surface-color] rounded-2xl p-8 border-2 border-[--border-color] hover:border-[--google-yellow] transition-all duration-300 hover:shadow-xl mb-8">
            <h3 className="text-2xl font-semibold mb-6 text-[--google-yellow] flex items-center gap-3">
              <i className="fas fa-chart-line text-2xl"></i>
              How the Leaderboard Works
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[--google-blue] rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-sync-alt text-white text-xl"></i>
                </div>
                <h4 className="font-semibold text-[--default-font-color] mb-2">Real-time Updates</h4>
                <p className="text-[--text-secondary]">Leaderboard updates automatically as participants complete challenges and earn badges.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[--google-green] rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-chart-bar text-white text-xl"></i>
                </div>
                <h4 className="font-semibold text-[--default-font-color] mb-2">Multiple Metrics</h4>
                <p className="text-[--text-secondary]">Track progress through skill badges, arcade games, trivia completion, and milestone achievements.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[--google-yellow] rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-search text-white text-xl"></i>
                </div>
                <h4 className="font-semibold text-[--default-font-color] mb-2">Search & Filter</h4>
                <p className="text-[--text-secondary]">Find specific participants and sort by different achievement categories.</p>
              </div>
            </div>
          </div>

          <div className="text-center pt-8">
            <Link to="/leaderboard" 
                  className="inline-flex items-center gap-3 bg-[--google-blue] hover:bg-[--google-green] text-white px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <i className="fas fa-trophy text-xl"></i>
              View Leaderboard
            </Link>
          </div>
        </div>

        <Backgroound />
      </div>
    </>
  );
};

export default LeaderboardAboutPage;
