class ExercisesController < ApplicationController

    def index
        exercises = Exercise.all 
        render json: exercises
    end

    def show
        exercise=Exercise.find_by(id: params[:id])
        render json: exercise
    end

    def create 
        exercise = Exercise.new(title: params[:title], description: params[:description], muscle_group: params[:muscle_group], user_id: User.first.id)
        if exercise.save
            render json: exercise, status: :created
        else
            render json: {error: "did not create"}
        end
    end

    def update
        exercise = Exercise.find_by(id: params[:id])
        if exercise 
            exercise.update(exercise_params)
            render json: exercise
        else
            render json: {error: "exercise doesn't exist"}, status: :not_found
        end
    end

    def destroy
            exercise = Exercise.find_by(id: params[:id])
            if exercise 
                exercise.destroy
                head :no_content
            else
                render json: {error: "exercise doesn't exist"}, status: :not_found
            end
        end


    private

    def exercise_params 
        params.permit(:description)
    end
end
