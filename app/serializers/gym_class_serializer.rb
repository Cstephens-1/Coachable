class GymClassSerializer < ActiveModel::Serializer
  attributes :id, :start_time, :end_time, :level, :description


  has_one :user
 has_many :class_students
  has_many :class_workouts
  has_many :students, through: :class_students
  has_many :workout_plans, through: :class_workouts

  
end
