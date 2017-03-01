Rails.application.routes.draw do
  root 'home#index'
  
  namespace :api, defaults: { format: :json } do 
    resources :songs, except: [:new, :edit]
  end 

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
