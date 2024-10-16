import React from 'react';

const jobs = [
  { id: 1, title: 'Frontend Developer', company: 'Company A', location: 'Remote' },
  { id: 2, title: 'Backend Developer', company: 'Company B', location: 'New York' },
  { id: 3, title: 'Full Stack Developer', company: 'Company C', location: 'San Francisco' }
];

function JobList() {
  return (
    <div>
      <h2>Available Jobs</h2>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <p>{job.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobList;
