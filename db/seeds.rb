# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "seeding data"

User.create(
    username:"cory1", 
    password:"123", 
    name: "Cory", 
    bio:"gym coach from nola"
)


GymClass.create(
    start_time: "4:00pm",
    end_time: "6:00pm",
    level: "4",
    description: "entry level competitive gymnastics",
    user_id: 1

)

Student.create(
    name: "Joe Smith",
    notes: "allergic to peanuts"
)

Exercise.create(
    title: "Bicep curl",
    muscle_group: "biceps",
    description: "underhand grip, bring the weight to your shoulder and slowly return. Be sure to keep back straight.",
    user_id: 1
)

WorkoutPlan.create(
    title: "Arm day",
    user_id: 1
)

ExerciseList.create(
    reps: "12/10/8",
    exercise_id: 1,
    workout_plan_id: 1
)

UserWorkout.create(
    user_id: 1,
    workout_plan_id: 1
)

ClassWorkout.create(
    workout_plan_id: 1,
    gym_class_id: 1
)

# ClassStudent.create(
#     student_id: 1,
#     gym_class_id: 1
# )

puts "done seeding"