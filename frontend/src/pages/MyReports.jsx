import React from 'react';
import IssueCard from '../components/IssueCard';
import { Link } from 'react-router-dom';

const MyReports = () => {
  // Dummy data for reports
  const dummyReports = [
    {
      id: 1,
      title: 'Large Pothole on Main Street',
      description: 'Deep pothole approximately 1 foot wide causing hazard for vehicles. Located near the intersection with Oak Avenue.',
      type: 'Pothole',
      status: 'in-progress',
      location: '123 Main St, near Kalkaji',
      imageUrl: '/pot_hole.png',
      date: '2025-04-20',
    },
    {
      id: 2,
      title: 'Overflowing Trash Can',
      description: 'Trash can at the corner of Pine St and 5th Avenue has been overflowing for days. Creating unsanitary conditions.',
      type: 'Garbage',
      status: 'pending',
      location: 'A-56 Okhla',
      imageUrl: '/overflowing-trace-can.png',
      date: '2025-04-22',
    },
    {
      id: 3,
      title: 'Broken Street Light',
      description: 'Street light not working for the past week. Area is very dark at night creating safety concerns for pedestrians.',
      type: 'Broken Light',
      status: 'resolved',
      location: 'D-6 GTB nagar',
      imageUrl: 'broken_street_light.png',
      date: '2025-04-15',
    },
    {
      id: 4,
      title: 'Water Leakage',
      description: 'Water continuously leaking from pipe near sidewalk. Creating puddles and potential ice hazard as temperatures drop.',
      type: 'Water Leak',
      status: 'pending',
      location: 'B-89 main street uttam nagar',
      imageUrl: '/water_leakage.png',
      date: '2024-04-23',
    },
    {
      id: 5,
      title: 'Fallen Tree Blocking Path',
      description: 'Medium-sized tree has fallen across the walking path in Central Park after last night\'s storm. Completely blocking pedestrian access.',
      type: 'Fallen Tree',
      status: 'in-progress',
      location: 'Central Park, North Entrance',
      imageUrl: '/fallen_tree.png',
      date: '2024-04-19',
    },
    {
      id: 6,
      title: 'spitting on Community Center Wall',
      description: 'New graffiti appeared on the east-facing wall of the community center. Inappropriate content needs to be removed.',
      type: 'spitting',
      status: 'pending',
      location: '101 Community center New Friends Colony Delhi',
      imageUrl: 'spitting_on_wall.png',
      date: '2024-04-21',
    },
  ];

  return (
    <div className="py-8 md:py-12 bg-civic-light-bg">
      <div className="container-custom mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">My Reports</h1>
            <p className="text-gray-600 mt-1">View and track the status of issues you've reported</p>
          </div>
          <Link to="/report" className="btn-primary">
            Report New Issue
          </Link>
        </div>

        {dummyReports.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dummyReports.map((report) => (
              <IssueCard key={report.id} issue={report} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg p-8 text-center shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">No Reports Yet</h3>
            <p className="text-gray-600 mb-6">
              You haven't submitted any issue reports yet.
            </p>
            <Link to="/report" className="btn-primary">
              Report Your First Issue
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyReports;
