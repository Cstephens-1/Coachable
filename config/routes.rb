Rails.application.routes.draw do
  resources :gym_classes
  resources :exercise_lists
  resources :class_workouts
  resources :class_students
  resources :user_workouts
  resources :workout_plans
  resources :exercises
  resources :students
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
