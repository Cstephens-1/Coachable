Rails.application.routes.draw do
  resources :exercise_lists
  resources :class_workouts
  resources :class_students
  resources :user_workouts
  resources :workout_plans
  resources :exercises
  resources :students
  resources :gym_classes
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
