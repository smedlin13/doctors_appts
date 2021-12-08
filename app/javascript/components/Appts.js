import React from 'react';

const Appts = ({ appts, users, doctors }) => {
  return (
    <>
    <h1>All Appointments</h1>
    <a href="/users/new">Add Patient to Files</a>
    <h2>{ users.length <= 0 ? "No Users" : ''}</h2>
    { users.map ( (user) => (
      <div>
        <a href={`/users/${user.id}`}>{user.first_name} {user.last_name}</a>
      </div>
    ))}
  </>
  )
}

export default Appts;