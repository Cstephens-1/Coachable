class ClassStudentsController < ApplicationController
    def index 
        class_students = ClassStudent.all 
        render json: class_students
    end

    def create 
        new_student = ClassStudent.create(class_student_params)
        render json: new_student
    end

    private

    def class_student_params
        params.permit(:student_id, :gym_class_id)
    end
end
