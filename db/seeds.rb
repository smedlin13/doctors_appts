dayArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
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

  Appt.create(
      time: Faker::Provider.date_time_this_year,
      dates: @dateArr.sample,
      user_id: user.id
      # doctor_id: doctor.id
    )
  



puts "Data Seeded."
