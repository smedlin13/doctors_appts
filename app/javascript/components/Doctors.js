import React from 'react';

const Doctors = ({ doctors }) => {
  return (
    <>
    <h1>All Doctors</h1>
    <a href="/doctors/new">Add Doctor to Files</a>
    <h2>{ doctors.length <= 0 ? "No Doctors" : ''}</h2>
    { doctors.map ( (doctor) => (
      <div>
        <a href={`/doctors/${doctor.id}`}>Dr. {doctor.first_name} {doctor.last_name}</a>
      </div>
    ))}
  </>
  )
}

export default Doctors;