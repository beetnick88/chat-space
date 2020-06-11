Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
  root "messages#index"
  resources :users, only: [:edit, :update]
>>>>>>> Stashed changes
=======
    root "messages#index"
>>>>>>> e5cfbea298a52ab028fb1b7737698963cc6d2051
end
