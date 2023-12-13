module Orders
  class CheckoutService

    # Using this as a base price for each bag
    BASE_PRICE = 5.90

    attr_reader :order

    def initialize(params)
      @params = params
    end

    def call
      ActiveRecord::Base.transaction do
        # Find or Create User entity based on name/email
        # Update card number in separated so if the user uses a different card, we dont create another User record in the DB
        @user = User.first_or_create!(user_params)
        @user.update!(card_number: @params["card_number"])
        @user.save!

        # Update Order parameters and state to submitted
        @order = Order.create(order_params)

        # Validate card number
        @order.update!(state: is_card_number_valid)
      end

      true
    rescue ActiveRecord::RecordNotSaved, ActiveRecord::RecordInvalid => e
      false
    end

    private

    def order_params
      {
        location: @params['location'],
        quantity: @params['quantity'].to_i,
        price: calculate_price,
        user: @user,
        state: :submitted
      }
    end

    def user_params
      {
        name: @params["name"],
        email: @params["email"]
      }
    end

    def is_card_number_valid
      return :success if Rails.env.test?
      return :failed unless @params["card_number"].present?

      # .sample is a method used to return a random element from an array (50% chance for each)
      [:success, :failed].sample
    end

    def calculate_price
      BASE_PRICE * @params["quantity"].to_i
    end
  end
end