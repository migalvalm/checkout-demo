class Api::V1::OrdersController < ApplicationController
  # POST /orders/checkout
  def checkout    
    service = Orders::CheckoutService.new(checkout_params)
    service.call

    if service.order.success?
      render json: service.order
    else
      render json: { error: 'Your booking has failed. Please try again.'}, status: :unprocessable_entity
    end
  end

  private 

  def order_params
    params.require(:order).permit(:location)
  end

  def checkout_params
    params.require(:order).permit(:location, :quantity, :name, :email, :card_number)
  end
end
