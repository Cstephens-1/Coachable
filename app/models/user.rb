class User < ApplicationRecord
    has_many :gym_classes
    has_many :exercises
    has_many :workout_plans
    has_many :user_workouts
    has_many :workout_plans, through: :user_workouts
end
