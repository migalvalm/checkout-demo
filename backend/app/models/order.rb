# == Schema Information
#
# Table name: orders
#
#  id         :bigint           not null, primary key
#  location   :string
#  price      :float
#  quantity   :integer
#  state      :integer          default("draft")
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint
#
# Indexes
#
#  index_orders_on_user_id  (user_id)
#
class Order < ApplicationRecord
  belongs_to :user, optional: true

  enum :state, { draft: 0, submitted: 1, success: 2, failed: 3 }
end
