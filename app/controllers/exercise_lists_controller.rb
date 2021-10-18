class ExerciseListsController < ApplicationController

    def index 
        exercise_lists = ExerciseList.all 
        render json: exercise_lists, each_serializer: ExerciseListSerializer
    end
end
