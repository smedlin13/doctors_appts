import React from 'react';

const Doctor = ({ doctor }) => {

  const { first_name, last_name, phone, id, created_at } = doctor
 
  return (
    <>
    <h3>{first_name} {last_name}</h3>
    <h4>Phone: {phone}, Created at: {created_at}, Id: {id}</h4>
    <a href="/">Back</a>
    <br />
    <a href={`/doctors/${id}/appts/new`}>Add a new appointment with  Dr. {first_name} Appointments</a><br />
    <a href={`/doctors/${id}/appts`}>See Dr. {first_name} appointments.</a>
    </>
    )
  }

export default Doctor;