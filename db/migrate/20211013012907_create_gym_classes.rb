class CreateGymClasses < ActiveRecord::Migration[6.1]
  def change
    create_table :gym_classes do |t|
      t.time :start_time
      t.time :end_time
      t.string :level
      t.string :description
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
