class ClassStudentsController < ApplicationController
    def index 
        class_students = ClassStudent.all 
        render json: class_students
    end

    # def create 
    # end
end
