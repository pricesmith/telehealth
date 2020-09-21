# frozen_string_literal: true

Rails.application.routes.draw do
  root to: 'application#index'

  post '/cards', to: 'cards#create'
end
