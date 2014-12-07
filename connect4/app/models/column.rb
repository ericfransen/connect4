class Column < ActiveRecord::Base
  belongs_to :board
  has_many :spots
end
