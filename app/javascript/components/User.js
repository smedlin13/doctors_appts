import React from 'react';

const User = ({ user }) => {

  const { first_name, last_name, phone, id, created_at } = user
  return (
    <>
    <h3>{first_name} {last_name}</h3>
    <h4>Phone: {phone}, Created at: {created_at}, Id: {id}</h4>
    <a href="/">Back</a>
    <br />
    <a href={`/users/${id}/appts`}>Go to {first_name} Appointments</a>
    </>
    )
  }

export default User;
