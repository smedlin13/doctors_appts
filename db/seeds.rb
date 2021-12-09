@dayArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
@timeArr = ['8:00 a.m.', '9:00 a.m.', '10:00 a.m.', '11:00 a.m.', '1:00 p.m.', '2:00 p.m.', '3:00 p.m.', '4:00 p.m.']

10.times do
  doctor = Doctor.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    phone: Faker::PhoneNumber.phone_number
  )
  end
 
  10.times do 
    user = User.create(
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      phone: Faker::PhoneNumber.phone_number
    )
  end

  10.times do 
  appt = Appt.create(
      time: @timeArr.sample,
      date: @dayArr.sample,
      user_id: user.id
      doctor_id: doctor.id
    )
  end
  



puts "Data Seeded."
