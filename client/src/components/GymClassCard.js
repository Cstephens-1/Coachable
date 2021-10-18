
import { useEffect, useState } from "react"
import styled from "styled-components"

function GymClassCard({gymClass, handleDelete}){

    const [classStudents, setClassStudents] = useState([])
    const [students, setStudents] =useState([])
    const [selectedStudent, setSelectedStudent] = useState([])
    const [description, setDescription] = useState("")

    // console.log(gymClass)
    // console.log(gymClass.students)

    //fetch data for the students added to this class
    useEffect(()=>{
    fetch("http://localhost:3000/class_students")
    .then(resp=> resp.json())
    .then(student => setClassStudents(student))
    }, [])


    function deleteThisClass(){
        handleDelete(gymClass)
    }

    function mapStudents(gymClass){
        return(
            gymClass.students.map(student=>{
                return(
                    <li>{student.name}</li>
                )
            })
        )
    }

    function mapWorkouts(gymClass){
        // console.log( "instance of gymclass", gymClass)
        return(
            gymClass.workout_plans.map(workout=>{
                // console.log("this log comes from gymclasscard", gymClass.class_workouts)
                return(
                    <h5>{workout.title}</h5>
                )
            })
        )
    }

    //add a student to the specific class..requires a refresh
    function addStudentToClass(synthEvent){
        synthEvent.preventDefault()
        console.log(selectedStudent, gymClass)
        const addedStudent ={
            student_id: selectedStudent,
            gym_class_id: gymClass.id
        }
        // POST fetch to class_students, hit a create route.
        fetch("http://localhost:3000/class_students", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(addedStudent)})
                .then(resp=> resp.json())
                .then(newStudent=> setClassStudents([...classStudents, newStudent]))
        }

//fetch the students to use in the addStudent function
    useEffect(()=>{
        fetch("http://localhost:3000/students")
        .then(resp=> resp.json())
        .then(student => setStudents(student))
    }, [])

    function editClassDescription(synthEvent){
        synthEvent.preventDefault()
        console.log(description)
         fetch(`http://localhost:3000/gym_classes/${gymClass.id}`, {
            method: "PATCH",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify({description: description})
        })
        .then(resp => resp.json())
        .then(updatedDescription => setDescription(updatedDescription))
        

    }


    return(
        <GymCardStyler>
            <h1>Level: {gymClass.level}</h1>
            <h5>{gymClass.start_time} - {gymClass.end_time}</h5>
            <p>Description: {gymClass.description}</p>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
            <ButtonStyler onClick={editClassDescription}>Edit description</ButtonStyler>
            <h5>Today's workout</h5>
            {mapWorkouts(gymClass)}
            <h5>Students:</h5>
            {mapStudents(gymClass)}
            <ButtonStyler onClick={addStudentToClass}>Add a student</ButtonStyler>
               
            <select type="text" value={selectedStudent} onChange={(e) => setSelectedStudent(e.target.value)}>
                <option >Please select a student</option>
                {students.map(student =>{
                    return(
                        <option value={student.id} key={student.id}>{student.name}</option>
                    )
                })}
            </select>
            <ButtonStyler onClick={deleteThisClass}>Delete this class</ButtonStyler>
        </GymCardStyler>
    )
}


export default GymClassCard

const GymCardStyler = styled.div`
    border-width: 2px;
    border-color: black;
    border-style: solid;
    width: 250px;
    height: 300px;
    text-align: center;
    padding: 20px;
    margin: 6px;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: scroll;
`

const ButtonStyler= styled.button`
    margin: 5px;
    border-radius: 5px;
    font-size: 15px;
    background-color: skyblue;
    padding: 5px;
`