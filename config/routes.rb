Rails.application.routes.draw do
  resources :developer_projects
  resources :design_projects
  
  
  get "/admin/verify", to: "admins#verify"
  post "/admin/login", to: "admins#login"
  resources :admins
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
