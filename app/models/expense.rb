# frozen_string_literal: true

class Expense < ApplicationRecord
  validates :item, presence: true, length: { maximum: 25 }
  validates :price, presence: true, numericality: { only_integer: true }
end
