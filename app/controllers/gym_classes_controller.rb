class GymClassesController < ApplicationController

    def index
        gym_classes = GymClass.all
        render json: gym_classes
    end

    end
