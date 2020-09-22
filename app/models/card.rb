# frozen_string_literal: true

class Card < ApplicationRecord
  has_one_attached :image
  has_rich_text :content
end
