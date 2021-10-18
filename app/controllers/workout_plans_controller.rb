class WorkoutPlansController < ApplicationController

    def index
        workout_plans = WorkoutPlan.all 
        render json: workout_plans, each_serializer: WorkoutPlanIndexSerializer
    end

    def show
        workout_plan = WorkoutPlan.find_by(id: params[:id])
        render json: workout_plan
    end

end
