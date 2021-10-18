import { useEffect, useState } from "react"
import styled from "styled-components"

function WorkoutCard({workout, handleDelete}){
    // console.log("this is a workout in workoutCard", workout)
    const [students, setStudents] = useState([])
    const [selectedStudent, setSelectedStudent] = useState({})

    function mapExerciseLists(workout){
            return(
                workout.formatted_exercise_list.map(exercise_list =>{
                return(
                    <>
                    <li>{exercise_list.exercise_reps} {exercise_list.exercise_title}</li>
                    </>
                )
            }))
            }


    function deleteThisWorkout(){
        handleDelete(workout)
    }
                    
    // function mapWorkouts(gymClass){
    //     return(
    //         gymClass.workout_plans.map(workout=>{
    //             console.log(workout.id)
    //             return(
    //                 <h5>{workout.title}</h5>
    //             )
    //         })
    //     )
    // }

    useEffect(()=>{
        fetch("http://localhost:3000/students")
        .then(resp=> resp.json())
        .then(student => setStudents(student))
    }, [])

    return(
        <WorkoutCardStyler>
        <h1>{workout.title}</h1>
        <p>{mapExerciseLists(workout)}</p>
        <ButtonStyler onClick={deleteThisWorkout}>Delete this workout</ButtonStyler>
        <ButtonStyler>Add a new exercise to this workout</ButtonStyler>
        <ButtonStyler>Edit this workout</ButtonStyler>
        <input placeholder="edit this workout"></input>
        </WorkoutCardStyler>

    )
}

export default WorkoutCard

const WorkoutCardStyler = styled.div`
    width: 300px;
    border-width: 2px;
    border-style: solid;
    border-color: black;
    text-align: center;
    margin: 6px;
`

const ButtonStyler= styled.button`
    margin: 5px;
    border-radius: 5px;
    font-size: 15px;
    background-color: skyblue;
    padding: 5px;
`