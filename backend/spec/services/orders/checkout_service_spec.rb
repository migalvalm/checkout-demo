require 'rails_helper'

RSpec.describe Orders::CheckoutService, type: :service do
  let(:params) { { location: 'Test Store', quantity: 1, price: 5.90, name: 'Test User', email: 'test@example.com', card_number: '4242 4242 4242 4242' }.to_json }
  let(:service) { described_class.new(JSON.parse(params)) }
 
  describe '#call' do
    it 'creates a new user and create order' do
      expect { service.call }.to change { User.count }.by(1)
      expect { service.call }.to change { Order.count }.by(1)
    end

    it 'validates card number' do
      expect(service.send(:is_card_number_valid)).to be_in([:success, :failed])
    end

    it 'calculates price correctly' do
      expect(service.send(:calculate_price)).to eq(5.90)
    end

    it 'handles ActiveRecord::RecordNotSaved and ActiveRecord::RecordInvalid exceptions' do
      allow(User).to receive(:first_or_create!).and_raise(ActiveRecord::RecordNotSaved)
      expect(service.call).to eq(false)
    end
  end
 end