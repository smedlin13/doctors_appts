class DoctorsController < ApplicationController
  before_action :set_doctor, only: [:show, :destroy]
  
  def index
    @doctors = Doctor.all
    render component: 'Doctors', props: { doctors: @doctors }
  end

  def show
    @doctor = Doctor.find(params[:id])
    render component: 'Doctor', props: { doctor: @doctor}
  end

  def new
    @docotor = Doctor.new
    render component: 'DoctorNew', props: { doctor: @doctor }
  end

  def create
    @doctor = Doctor.new(doctor_params)
    if @doctor.save
      redirect_to @doctor
    else
      render component: 'DoctorNew', props: { doctor: @doctor }
    end
  end

  def destroy
    @doctor.destroy
    redirect_to doctors_path
  end


  def edit
  end

  private
  def set_doctor
    @doctor = Doctor.find(params[:id])
  end

  def doctor_params
    params.require(:doctor).permit(:first_name, :last_name, :phone)
  end
end
