
Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :orders do
        collection do
          post '/checkout', to: 'orders#checkout'
        end
      end
    end
  end
end