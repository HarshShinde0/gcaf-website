import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Backgroound from "../Components/Background";

const LeaderboardPage = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setFilteredData(data);
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

      <div className="min-h-screen py-16">
        {/* Hero Section */}
        <div className="flex py-12 flex-col justify-center items-center md:px-60 px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-[--google-blue]">
            🏆 GCAF Leaderboard
          </h1>
          <p className="text-xl leading-relaxed text-[--text-secondary]">
            Track the progress and achievements of Google Cloud Arcade Facilitator '25 participants. 
            Monitor milestones, skill badges, and arcade game completions in real-time.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="flex justify-center gap-8 py-8 flex-wrap px-4">
          <div className="bg-gradient-to-br from-[--google-blue] to-[--google-green] text-white p-6 rounded-2xl text-center min-w-[200px] shadow-lg">
            <div className="text-4xl font-bold mb-2">{stats.total}</div>
            <div className="text-lg">Total Participants</div>
          </div>
          <div className="bg-gradient-to-br from-[--google-yellow] to-[--google-red] text-white p-6 rounded-2xl text-center min-w-[200px] shadow-lg">
            <div className="text-4xl font-bold mb-2">{stats.ultimate}</div>
            <div className="text-lg">Ultimate Milestone</div>
          </div>
          <div className="bg-gradient-to-br from-[--google-green] to-[--google-blue] text-white p-6 rounded-2xl text-center min-w-[200px] shadow-lg">
            <div className="text-4xl font-bold mb-2">{stats.m3}</div>
            <div className="text-lg">Milestone 3</div>
          </div>
          <div className="bg-gradient-to-br from-[--google-red] to-[--google-yellow] text-white p-6 rounded-2xl text-center min-w-[200px] shadow-lg">
            <div className="text-4xl font-bold mb-2">{stats.m2}</div>
            <div className="text-lg">Milestone 2</div>
          </div>
          <div className="bg-gradient-to-br from-[--google-blue] to-[--google-green] text-white p-6 rounded-2xl text-center min-w-[200px] shadow-lg">
            <div className="text-4xl font-bold mb-2">{stats.m1}</div>
            <div className="text-lg">Milestone 1</div>
          </div>
        </div>

        {/* Search Section */}
        <div className="flex justify-center py-8">
          <div className="relative max-w-md w-full">
            <input 
              type="text" 
              placeholder="Search participants..." 
              className="w-full px-6 py-3 border-2 border-[--border-color] rounded-full focus:border-[--google-blue] focus:outline-none transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <i className="fas fa-search text-[--text-secondary]"></i>
            </div>
          </div>
        </div>

        {/* Leaderboard Section */}
        <div className="px-4 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white dark:bg-[--surface-color] rounded-2xl border-2 border-[--border-color] overflow-hidden shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-[--google-blue] to-[--google-green] text-white">
                    <tr>
                      {data.length > 0 && Object.keys(data[0]).map((header, index) => (
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
                  <tbody className="divide-y divide-[--border-color]">
                    {filteredData.map((row, rowIndex) => (
                      <tr key={rowIndex} className="hover:bg-[--hover-color] transition-colors">
                        {Object.keys(data[0] || {}).map((header, cellIndex) => {
                          const cellContent = row[header];
                          let cellHtml = '';

                          if (header === 'Access Code Redemption Status') {
                            cellHtml = createStatusBadge(cellContent);
                          } else if (header === 'Milestone Earned') {
                            cellHtml = createMilestoneBadge(cellContent);
                          } else if (header === '# of Skill Badges Completed' || 
                                     header === '# of Arcade Games Completed' || 
                                     header === '# of Trivia Games Completed') {
                            cellHtml = createNumberBadge(cellContent);
                          } else {
                            cellHtml = cellContent || '-';
                          }

                          return (
                            <td key={cellIndex} className="px-6 py-4" dangerouslySetInnerHTML={{ __html: cellHtml }}></td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <Backgroound />
      </div>
    </>
  );
};

export default LeaderboardPage;
