import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Backgroound from "../Components/Background";

const LeaderboardPage = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Define the columns to show in the leaderboard
  const leaderboardColumns = [
    'User Name',
    'Access Code Redemption Status',
    '# of Skill Badges Completed',
    '# of Arcade Games Completed',
    '# of Trivia Games Completed',
    'Milestone Earned',
    'Total Points'  
  ];

  useEffect(() => {
    // Fetch from Django API endpoint
    fetch('http://localhost:8000/api/arcade-points/')
      .then(response => response.json())
      .then(data => {
        // Map API keys to expected column names
        const mapped = data.users_summary.map(user => ({
          'User Name': user.user_name,
          'Access Code Redemption Status': user.access_code_redemption_status,
          '# of Skill Badges Completed': user.skill_badges_completed,
          '# of Arcade Games Completed': user.arcade_games_completed,
          '# of Trivia Games Completed': user.trivia_games_completed,
          'Milestone Earned': user.achieved_milestone,
          // Add any other fields needed for modal/details
          'Names of Completed Skill Badges': user.names_of_completed_skill_badges,
          'Names of Completed Arcade Games': user.names_of_completed_arcade_games,
          'Names of Completed Trivia Games': user.names_of_completed_trivia_games,
          'Names of Completed Lab-free Courses': user.names_of_completed_lab_free_courses,
          '# of Lab-free Courses Completed': user.lab_free_courses_completed,
          'Profile URL Status': user.profile_url_status,
          'Google Cloud Skills Boost Profile URL': user.google_cloud_skills_boost_profile_url,
          'Closest Milestone': user.closest_milestone,
          'Missing for Closest Milestone': user.missing_for_closest_milestone,
          'Total Points': user.total_points,
        }));
        setData(mapped);
        setFilteredData(mapped);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filtered = data.filter(row =>
        Object.values(row).some(value =>
          value && value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  }, [searchTerm, data]);

  const updateStats = (data) => {
    const total = data.length;
    const ultimate = data.filter(row => row['Milestone Earned'] === 'Ultimate Milestone').length;
    const m3 = data.filter(row => row['Milestone Earned'] === 'Milestone 3').length;
    const m2 = data.filter(row => row['Milestone Earned'] === 'Milestone 2').length;
    const m1 = data.filter(row => row['Milestone Earned'] === 'Milestone 1').length;

    return { total, ultimate, m3, m2, m1 };
  };

  const sortTable = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });

    const sorted = [...filteredData].sort((a, b) => {
      let aVal = a[key];
      let bVal = b[key];

      // Handle numeric values
      if (!isNaN(aVal) && !isNaN(bVal)) {
        aVal = parseFloat(aVal);
        bVal = parseFloat(bVal);
      }

      if (aVal < bVal) return direction === 'asc' ? -1 : 1;
      if (aVal > bVal) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    setFilteredData(sorted);
  };

  const formatHeaderText = (header) => {
    return header
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase())
      .replace(/# of /g, '')
      .replace(/ Completed/g, '');
  };

  const createStatusBadge = (status) => {
    const statusClass = status === 'Yes' ? 'status-yes' : 'status-no';
    return `<span class="status-badge ${statusClass}">${status}</span>`;
  };

  const createMilestoneBadge = (milestone) => {
    let badgeClass = 'milestone-badge';
    if (milestone === 'Ultimate Milestone') badgeClass += ' ultimate';
    else if (milestone === 'Milestone 3') badgeClass += ' m3';
    else if (milestone === 'Milestone 2') badgeClass += ' m2';
    else if (milestone === 'Milestone 1') badgeClass += ' m1';

    return `<span class="${badgeClass}">${milestone}</span>`;
  };

  const createNumberBadge = (number) => {
    const num = parseInt(number) || 0;
    let badgeClass = 'number-badge';
    if (num >= 10) badgeClass += ' high';
    else if (num >= 5) badgeClass += ' medium';
    else if (num >= 1) badgeClass += ' low';

    return `<span class="${badgeClass}">${num}</span>`;
  };

  const handleUserNameClick = (userData) => {
    setSelectedUser(userData);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  const calculateTotalPoints = (user) => {
    const skill_badges = user['# of Skill Badges Completed'] || 0;
    const arcade_games = user['# of Arcade Games Completed'] || 0;
    const trivia_games = user['# of Trivia Games Completed'] || 0;

    const skill_badge_points = Math.floor(skill_badges / 2);
    let arcade_game_points = arcade_games;
    if (arcade_games >= 14) {
      arcade_game_points = 16;
    }
    const trivia_points = trivia_games;

    return skill_badge_points + arcade_game_points + trivia_points;
  };

  const stats = updateStats(data);

  return (
    <>
      <Helmet>
        <title>GCAF Leaderboard - Google Cloud Arcade Facilitator Program</title>
        <meta
          name="description"
          content="Track your progress and achievements in the Google Cloud Arcade Facilitator Program. View the leaderboard and see how you rank among other participants."
        />
      </Helmet>

      <div className="min-h-screen py-2">
        {/* Leaderboard Section */}
        <div className="px-4 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/80 dark:bg-[--surface-color]/80 backdrop-blur-xl rounded-3xl border-2 border-black overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] dark:shadow-[0_25px_50px_-12px_rgba(255,255,255,0.1)]">
              {/* Leaderboard Header with Stats */}
              <div className="bg-gradient-to-r from-[--google-blue] to-[--google-green] text-white p-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                  {/* Left - Leaderboard Title */}
                  <h2 className="text-3xl font-bold">Leaderboard</h2>

                  {/* Center - Search Box */}
                  <div className="relative w-full md:w-80">
                    <input
                      type="text"
                      placeholder="Search participants..."
                      className="w-full px-4 py-2 border-2 border-white/30 rounded-full focus:border-white focus:outline-none transition-colors bg-white/20 text-white placeholder-white/70"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <i className="fas fa-search text-white/70"></i>
                    </div>
                  </div>

                  {/* Right - Stats */}
                  <div className="flex gap-4 flex-wrap justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold">{stats.total}</div>
                      <div className="text-sm opacity-90">Total</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">{stats.ultimate}</div>
                      <div className="text-sm opacity-90">Ultimate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">{stats.m3}</div>
                      <div className="text-sm opacity-90">M3</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">{stats.m2}</div>
                      <div className="text-sm opacity-90">M2</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">{stats.m1}</div>
                      <div className="text-sm opacity-90">M1</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-[--google-blue] to-[--google-green] text-white">
                    <tr>
                      {leaderboardColumns.map((header, index) => (
                        <th
                          key={index}
                          className="px-6 py-4 text-left font-semibold cursor-pointer hover:bg-white/10 transition-colors"
                          onClick={() => sortTable(header)}
                        >
                          <div className="flex items-center gap-2">
                            {formatHeaderText(header)}
                            {sortConfig.key === header && (
                              <i className={`fas fa-sort-${sortConfig.direction === 'asc' ? 'up' : 'down'}`}></i>
                            )}
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/20 bg-white/70 dark:bg-[--surface-color]/70">
                    {filteredData.map((row, rowIndex) => (
                      <tr key={rowIndex} className="hover:bg-[--hover-color] transition-colors">
                        {leaderboardColumns.map((header, cellIndex) => {
                          const cellContent = row[header];

                          if (header === 'User Name') {
                            // Make user name clickable
                            return (
                              <td key={cellIndex} className="px-6 py-4">
                                <button
                                  onClick={() => handleUserNameClick(row)}
                                  className="text-blue-600 hover:text-blue-800 underline cursor-pointer bg-transparent border-none p-0 text-left"
                                >
                                  {cellContent || '-'}
                                </button>
                              </td>
                            );
                          } else if (header === 'Access Code Redemption Status') {
                            return (
                              <td key={cellIndex} className="px-6 py-4" dangerouslySetInnerHTML={{ __html: createStatusBadge(cellContent) }}></td>
                            );
                          } else if (header === 'Milestone Earned') {
                            return (
                              <td key={cellIndex} className="px-6 py-4" dangerouslySetInnerHTML={{ __html: createMilestoneBadge(cellContent) }}></td>
                            );
                          } else if (header === '# of Skill Badges Completed' ||
                            header === '# of Arcade Games Completed' ||
                            header === '# of Trivia Games Completed' ||
                            header === 'Total Points') {  // Include Total Points in number badge handling
                            return (
                              <td key={cellIndex} className="px-6 py-4" dangerouslySetInnerHTML={{ __html: createNumberBadge(cellContent) }}></td>
                            );
                          } else {
                            return (
                              <td key={cellIndex} className="px-6 py-4">{cellContent || '-'}</td>
                            );
                          }
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* User Details Modal */}
        {showModal && selectedUser && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto mt-16">
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-[--google-blue] to-[--google-green] text-white p-6 rounded-t-2xl sticky top-0 z-10">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">{selectedUser['User Name']}</h2>
                  <button
                    onClick={closeModal}
                    className="text-white hover:text-gray-200 text-2xl font-bold"
                  >
                    ×
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg text-center border border-blue-200">
                    <div className="text-2xl font-bold text-blue-600">{selectedUser['# of Skill Badges Completed']}</div>
                    <div className="text-sm text-gray-600">Skill Badges</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-center border border-green-200">
                    <div className="text-2xl font-bold text-green-600">{selectedUser['# of Arcade Games Completed']}</div>
                    <div className="text-sm text-gray-600">Arcade Games</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg text-center border border-purple-200">
                    <div className="text-2xl font-bold text-purple-600">{selectedUser['# of Trivia Games Completed']}</div>
                    <div className="text-sm text-gray-600">Trivia Games</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg text-center border border-orange-200">
                    <div className="text-2xl font-bold text-orange-600">{selectedUser['# of Lab-free Courses Completed']}</div>
                    <div className="text-sm text-gray-600">Lab-free Courses</div>
                  </div>
                </div>

                 {/* Detailed Sections */}
                <div className="space-y-6">
                  {/* Skill Badges */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Names of Completed Skill Badges
                    </h3>
                    <div className="space-y-2">
                      {selectedUser['Names of Completed Skill Badges'] ? 
                        selectedUser['Names of Completed Skill Badges'].split(' | ').map((badge, index) => (
                          <div key={index} className="bg-white p-3 rounded border border-gray-200 text-sm">
                            {badge}
                          </div>
                        )) : 
                        <div className="bg-white p-3 rounded border border-gray-200 text-gray-500 text-sm">
                          No skill badges completed yet
                        </div>
                      }
                    </div>
                  </div>

                   {/* Arcade Games */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Names of Completed Arcade Games
                    </h3>
                    <div className="space-y-2">
                      {selectedUser['Names of Completed Arcade Games'] ? 
                        selectedUser['Names of Completed Arcade Games'].split(' | ').map((game, index) => (
                          <div key={index} className="bg-white p-3 rounded border border-gray-200 text-sm">
                            {game}
                          </div>
                        )) : 
                        <div className="bg-white p-3 rounded border border-gray-200 text-gray-500 text-sm">
                          No arcade games completed yet
                        </div>
                      }
                    </div>
                  </div>

                  {/* Trivia Games */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      Names of Completed Trivia Games
                    </h3>
                    <div className="space-y-2">
                      {selectedUser['Names of Completed Trivia Games'] ? 
                        selectedUser['Names of Completed Trivia Games'].split(' | ').map((trivia, index) => (
                          <div key={index} className="bg-white p-3 rounded border border-gray-200 text-sm">
                            {trivia}
                          </div>
                        )) : 
                        <div className="bg-white p-3 rounded border border-gray-200 text-gray-500 text-sm">
                          No trivia games completed yet
                        </div>
                      }
                    </div>
                  </div>

                  {/* Lab-free Courses */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                      Names of Completed Lab-free Courses
                    </h3>
                    <div className="space-y-2">
                      {selectedUser['Names of Completed Lab-free Courses'] ? 
                        selectedUser['Names of Completed Lab-free Courses'].split(' | ').map((course, index) => (
                          <div key={index} className="bg-white p-3 rounded border border-gray-200 text-sm">
                            {course}
                          </div>
                        )) : 
                        <div className="bg-white p-3 rounded border border-gray-200 text-gray-500 text-sm">
                          No lab-free courses completed yet
                        </div>
                      }
                    </div>
                  </div>
                  {/* Profile Information */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                      Profile Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="bg-white p-3 rounded border border-gray-200">
                        <span className="font-medium text-gray-700">Profile Status:</span>
                        <div className="text-sm text-gray-600 mt-1">{selectedUser['Profile URL Status'] || 'No profile URL available'}</div>
                      </div>
                      <div className="bg-white p-3 rounded border border-gray-200">
                        <span className="font-medium text-gray-700">Closest Milestone:</span>
                        <div className="text-sm text-gray-600 mt-1">{selectedUser['Closest Milestone']}</div>
                      </div>
                      <div className="bg-white p-3 rounded border border-gray-200">
                        <span className="font-medium text-gray-700">Missing for Closest Milestone:</span>
                        <div className="text-sm text-gray-600 mt-1">{selectedUser['Missing for Closest Milestone'].arcade_games || 0} Arcade Games, {selectedUser['Missing for Closest Milestone'].trivia_games || 0} Trivia Games, {selectedUser['Missing for Closest Milestone'].skill_badges || 0} Skill Badges, {selectedUser['Missing for Closest Milestone'].lab_free_courses || 0} Lab-free Courses</div>
                      </div>
                      <div className="bg-white p-3 rounded border border-gray-200">
                        <span className="font-medium text-gray-700">Milestone Earned:</span>
                        <div className="text-sm text-gray-600 mt-1">{selectedUser['Milestone Earned'] || 'No milestone information available'}</div>
                      </div>
                      <div className="bg-white p-3 rounded border border-gray-200">
                        <span className="font-medium text-gray-700">Total Points:</span>
                        <div className="text-sm text-gray-600 mt-1">{calculateTotalPoints(selectedUser)}</div>
                      </div>
                    </div>
                    {selectedUser['Google Cloud Skills Boost Profile URL'] && (
                      <div className="mt-3">
                        <a
                          href={selectedUser['Google Cloud Skills Boost Profile URL']}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm"
                        >
                          View Google Cloud Profile{selectedUser['Google Cloud Skills Boost Profile URL']}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <Backgroound />
      </div>
    </>
  );
};

export default LeaderboardPage;
