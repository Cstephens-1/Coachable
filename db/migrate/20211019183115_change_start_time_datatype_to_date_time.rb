class ChangeStartTimeDatatypeToDateTime < ActiveRecord::Migration[6.1]
  def change
    change_column :gym_classes, :start_time, :datetime
    change_column :gym_classes, :end_time, :datetime
  end
end
