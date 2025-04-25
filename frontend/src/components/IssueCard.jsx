import React from 'react';

const IssueCard = ({ issue }) => {
  const statusColors = {
    'pending': 'bg-amber-100 text-amber-800',
    'in-progress': 'bg-blue-100 text-blue-800',
    'resolved': 'bg-green-100 text-green-800'
  };

  const statusText = {
    'pending': 'Pending',
    'in-progress': 'In Progress',
    'resolved': 'Resolved'
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img
          src={issue.imageUrl}
          alt={issue.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-gray-900 truncate">{issue.title}</h3>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[issue.status]}`}>
            {statusText[issue.status]}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{issue.description}</p>
        <div className="text-sm text-gray-700">
          <p className="flex items-center mb-1">
            <span className="font-medium mr-2">Type:</span> {issue.type}
          </p>
          <p className="flex items-center mb-1">
            <span className="font-medium mr-2">Location:</span> 
            <span className="truncate">{issue.location}</span>
          </p>
          <p className="flex items-center">
            <span className="font-medium mr-2">Reported:</span> {issue.date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IssueCard;
