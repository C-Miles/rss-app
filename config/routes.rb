Rails.application.routes.draw do
  root to: 'application#show'

  resources :space_images, only: [:index]
end
