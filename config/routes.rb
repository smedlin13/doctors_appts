Rails.application.routes.draw do
  root 'users#index'

  resources :users do
    resources :appts
  end


  resources :doctors do
    resources :appts
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
