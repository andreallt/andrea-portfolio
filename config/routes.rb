Rails.application.routes.draw do
  resources :developer_projects
  resources :design_projects
  
  
  resources :admins
  post "/admins/login", to: "users#login"
  get "/admins/verify", to: "users#verify"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
