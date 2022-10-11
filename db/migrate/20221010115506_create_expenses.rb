# frozen_string_literal: true

class CreateExpenses < ActiveRecord::Migration[6.1]
  def change
    create_table :expenses do |t|
      t.string :item
      t.integer :price
      t.text :notes

      t.timestamps
    end
  end
end
