import React from 'react';

const ApptNew = ({ appt, doctor, users }) => {

  // const { last_name } = doctor;
  const { time, date, user_id } = appt;
  const defaultTime = time ? time : "Time Hasn't Been Set";
  const defaultDate = date ? date : "Date hasn't been set";
  // const defaultUser = user_id ? user_id : "";
  const { first_name, last_name, phone } = users
  const defaultFirstname = first_name ? first_name : ""
  const defaultLastname = last_name ? last_name : ""
  const defaultPhone = phone ? phone : ""
 
  return (
    <>
    <h1>Add a new appointment for Dr. {doctor.last_name} </h1>
    {/* { errors && errors } */}
    <form action={`/doctors/${doctor.id}/appts`} method="post">
      <label for="date">Choose an appointment day:</label>
      <select name="appt[date]" id="date" defaultValue={defaultDate}>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>  
      </select>  
      <select name="appt[time]" id="time" defaultValue={defaultTime}>
        <option value="8:00 a.m.">8:00 a.m.</option>
        <option value="10:00 a.m.">10:00 a.m.</option>
        <option value="12:00 p.m.">12:00 p.m.</option>
        <option value="2:00 p.m.">2:00 p.m.</option>
        <option value="4:00 p.m.">4:00 p.m.</option>  
      </select>  
      <label for="user_id">Choose a user:</label>
      <select name="appt[user_id]" id="user_id" defaultValue='No Users'>
        { users.map (( user ) => (
        <option value={user.id}>{`${user.first_name} ${user.last_name}`}</option>
        )}
      </select>
      <button type="submit">Add New Appt</button>
    </form>
    <a href="/users">Back to Doctors</a>
    </>

  );
}

export default ApptNew;