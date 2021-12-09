import React from 'react';

const User = ({ user }) => {

  const { first_name, last_name, phone, id, created_at } = user
  return (
    <>
    <h3>{first_name} {last_name}</h3>
    <h4>Phone: {phone}, Created at: {created_at}, Id: {id}</h4>
    <a href="/">Back</a>
    <br />
    {/* <a href={`/users/${id}/doctors`}>See {first_name}'s Doctors</a><br /> */}
    <a href={`/users/${id}/appts/new`} >Add a new Appointment for {first_name}.</a>

    </>
    )
  }

export default User;
