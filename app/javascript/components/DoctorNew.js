import React from 'react';

const DoctorNew = ({ doctor }) => {

  const { first_name, last_name, phone } = doctor
  const defaultFirst = first_name ? first_name : ""
  const defaultLast = last_name ? last_name : ""
  const defaultPhoneD = phone ? phone : ""
  return (
    <>
    <h1>Sign a New Patient Up</h1>
    <form action="/subs" method="post">
      <input
        type="text"
        placeholder="First Name"
        required
        defaultValue={defaultFirst}
        name="user[first_name]"
      />
      <input
        type="text"
        placeholder="Last Name"
        required
        defaultValue={defaultLast}}
        name="user[first_name]"
      />
      <input
        type="integer"
        placeholder="Phone Number"
        required
        defaultValue={defaultPhoneD}
        name="user[phone]"
      />
      <button type="submit">Add New Doctor</button>

    </form>
    <a href="/users">Back to Doctors</a>
    </>

  )
}

export default DoctorNew;