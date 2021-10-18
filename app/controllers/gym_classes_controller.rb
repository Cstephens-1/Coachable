class GymClassesController < ApplicationController

    def index
        gym_classes = GymClass.all.order(:start_time)
        render json: gym_classes, each_serializer: GymClassSerializer
    end
 
    def show
        gym_class = GymClass.find_by(id: params[:id])
        render json: gym_class, serializer: GymClassSerializer
    end

    def create 
        gym_class = GymClass.create(level: params[:level], start_time: params[:start_time], end_time: params[:end_time], description: params[:description], user_id: User.first.id)
        byebug
        render json: gym_class
    end

    private

    def gym_class_params
        params.permit(:level, :start_time, :end_Time, :description)
    end
 
end
