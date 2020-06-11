Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
<<<<<<< Updated upstream
=======
  root "messages#index"
  resources :users, only: [:edit, :update]
>>>>>>> Stashed changes
end
