class CreateGoals < ActiveRecord::Migration[5.2]
  def change
    create_table :goals do |t|
      t.string :title
      t.float :total
      t.string :category
      t.float :amount_paid, :default => 0
      t.float :amount_left
      t.boolean :paid, :default => false
    end
  end
end
