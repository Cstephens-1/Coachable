class CreateClassStudents < ActiveRecord::Migration[6.1]
  def change
    create_table :class_students do |t|
      t.belongs_to :student, null: false, foreign_key: true
      t.belongs_to :class, null: false, foreign_key: true

      t.timestamps
    end
  end
end
