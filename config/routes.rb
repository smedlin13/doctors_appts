Rails.application.routes.draw do
  root 'users#index'

  resources :users do
    resources :doctors
  end
  resources :doctors, execpt: [:index, :new, :create, :show, :update, :destroy] do
    resources :appts
  end


  # resources :doctors do
  #   resources :appts
  # end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
