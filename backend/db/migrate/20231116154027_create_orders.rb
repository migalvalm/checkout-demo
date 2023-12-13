class CreateOrders < ActiveRecord::Migration[7.1]
  def change
    create_table :orders do |t|
      t.string :location
      t.integer :quantity
      t.float :price
      t.integer :state, default: 0
      t.belongs_to :user
      t.timestamps
    end
  end
end
