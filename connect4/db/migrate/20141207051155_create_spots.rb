class CreateSpots < ActiveRecord::Migration
  def change
    create_table :spots do |t|
      t.string :color, default: "white"

      t.timestamps
    end
  end
end
