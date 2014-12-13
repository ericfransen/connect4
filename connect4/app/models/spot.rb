class Spot < ActiveRecord::Base
  belongs_to :column

  def color
    # "white"
  end
end
