class UsersController < ApplicationController
before_action :set_user

  def index
    @users = User.all 
    render component: 'Users', props: { users: @users }
  end

  def show
    render component: 'User', props: { user: @user, appts: @user.appts }
  end

  def new
    @user = User.new
    render component: 'UserNew', props: { user: @user }
  end

  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to users_path(@user)
    else
      render component: 'UserNew', props: { user: @user  }
    end
  end

  def destroy
    @user.destroy
    redirect_to users_path
  end

  def edit
  end

  private
  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name, :phone)
  end
end
