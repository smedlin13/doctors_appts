class ApptsController < ApplicationController
  before_action :set_doctor
  # before_action :set_user
  def index
    @appts = @doctor.appts
    render component: 'Appts', props: { appts: @appts, doctor: @doctor, users: @users}
  end

  def show
    @appt = @doctor.appt.find(params[:id])
    render component: 'Appt', props: { appts: @appts, doctors: @doctors, users: @users}
  end

  def new
    # @users = User.all - @appt.users
    @appt = @doctor.appts.new
    render component: 'ApptNew', props: { appt: @appt, doctor: @doctor, users: @users}
  end

  def edit
  end

  private
  def set_doctor
    @doctor = Doctor.find(params[:doctor_id])
  end

  # def set_user
  #   @user = User.find(params[:id])
  # end

  def appt_params
    params.require(:appt).permit(:time, :date, :user_id)
  end
end
