import React from 'react';

const UserNew = ({ user }) => {

  const { first_name, last_name, phone } = user
  const defaultFirstname = first_name ? first_name : ""
  const defaultLastname = last_name ? last_name : ""
  const defaultPhone = phone ? phone : ""
  return (
    <>
    <h1>Sign a New Patient Up</h1>
    <form action="/users" method="post">
      <input
        type="text"
        placeholder="First Name"
        required
        defaultValue={defaultFirstname}
        name="user[first_name]"
      />
      <input
        type="text"
        placeholder="Last Name"
        required
        defaultValue={defaultLastname}}
        name="user[first_name]"
      />
      <input
        type="integer"
        placeholder="Phone Number"
        required
        defaultValue={defaultPhone}
        name="user[phone]"
      />
      <button type="submit">Add New Patient</button>

    </form>
    <a href="/users">Back to Patients</a>
    </>

  )
}

export default UserNew;