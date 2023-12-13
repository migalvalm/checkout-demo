require 'rails_helper'

RSpec.describe Api::V1::OrdersController, type: :controller do
 let(:params) do
   {
     location: 'Default',
     quantity: 1,
     name: 'Test User',
     email: 'test@example.com',
     card_number: '4242 4242 4242 4242'
   }
 end

 describe 'POST #checkout' do
   it 'checks out an order and creates an user' do
     post :checkout, params: { order: params }, format: :json

     order = JSON.parse response.body
     user = User.find(order["user_id"])
     
     expect(order["quantity"]).to eq(1)
     expect(order["state"]).to eq('success')
     expect(order["price"]).to eq(5.9)
     expect(user.name).to eq('Test User')
     expect(user.email).to eq('test@example.com')
     expect(user.card_number).to eq('4242 4242 4242 4242')
   end
 end
end
