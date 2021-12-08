import React from 'react';

const ApptNew = ({ users, appt, doctor }) => {


  const { time, date, user_id } = appt;
  const defaultTime = time ? time : "Time Hasn't Been Set";
  const defaultDate = date ? date : "Date hasn't been set";
  const defaultUser = user_id ? user_id : "";
  const { first_name, last_name, phone } = users
  const defaultFirstname = first_name ? first_name : ""
  const defaultLastname = last_name ? last_name : ""
  const defaultPhone = phone ? phone : ""
 
  return (
    <>
    <h1>Add a new appointment for User</h1>
    { errors && errors }
    <form action={`/users/${users.id}/appts/new`} method="post">
      <label for="date">Choose an appointment day:</label>
      <select name="appt[date]" id="date" defaultValue={defaultDate}>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Friday</option>  
      </select>  
      <input
        type="text"
        placeholder="Time"
        required
        defaultValue={defaultTime}
        name="appt[time]"
      />
      <label for="user_id">Choose a user:</label>
      <select name="appt[user_id]" id="user_id" defaultValue={defaultUser}>
        { users.map (( user ) => 
        <option value={user.id}>{`${user.first_name} ${user.last_name}`}</option>
        )}
      </select>
      <button type="submit">Add New Appt</button>
    </form>
    <a href="/users">Back to Patients</a>
    </>

  );
}

export default ApptNew;