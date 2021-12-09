import React from 'react';

const Appt = ({ appt, user, doctor }) => {

  // const { first_name, last_name } = doctor
  // const { first_name, last_name } = user
  const { time, date } = appt
  return (
    <>
    <h3>Doctor Name: {doctor.first_name} {doctor.last_name}</h3>
    <h3>Patient Name: {user.first_name} {user.last_name}</h3>
    <a href="/">Back</a>
    <br />
    <a href={`/doctors/${doctor.id}/appts/new`}>Create a New Appointment for Dr. {doctor.first_name}</a><br />
    {/* <a href={`/doctor/${id}/appts/new`} >Add a new appointment for Dr. {first_name}.</a> */}
    </>
    )
  }

export default Appt;