import React from 'react';

const Appts = ({ appts, doctor }) => {

  // const {first_name, last_name} = users
  const {first_name, last_name} = doctor
  // const { first_name, last_name } = users
  const { time, date } = appts

  return (
    <>
    <h1>All of Dr. {doctor.last_name}'s Appointments </h1>
    <a href={`/doctors/${doctor.id}/appts/new`}>Add Appointment</a>
    <br />
    <p>{ appts.length <= 0 ? "No Appts" : ''}</p>
    { appts.map ( (appt) => (
        <p>{appt.time} {appt.date}</p>
    
    ))}
  </>
  )
}

export default Appts;