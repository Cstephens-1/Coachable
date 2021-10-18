class StudentSerializer < ActiveModel::Serializer
  attributes :id, :name, :notes

  has_many :class_students
  has_many :gym_classes, through: :class_students
end
