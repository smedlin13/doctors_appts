class ApptsController < ApplicationController
  before_action :set_doctor
 
  def index
    @appts = @doctor.appts
    render component: 'Appts', props: { appts: @appts, doctor: @doctor}
  end

  def show
    @appt = @doctor.appt(params[:id])
    render component: 'Appt', props ( appt: @appt )
  end

  def new
    @users = User.all - @appt.users
    @appt = @doctor.appts.new
    render component: 'ApptNew', props: { appt: @appt, doctor: @doctor, user: @user }
  end

  def edit
  end

  private
  def set_doctor
    @doctor = Doctor.find(params[:id])
  end

  def appt_params
    params.require(:appt).permit(:time, :date)
end
