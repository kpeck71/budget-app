class CreateBudgets < ActiveRecord::Migration[5.2]
  def change
    create_table :budgets do |t|
      t.float :income
      t.float :expenses
    end
  end
end
