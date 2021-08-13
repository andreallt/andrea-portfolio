Rails.application.routes.draw do
  resources :developer_projects
  resources :design_projects
  
  
  resources :admins
  post "/admin/login", to: "admins#login"
  get "/admin/verify", to: "admins#verify"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
