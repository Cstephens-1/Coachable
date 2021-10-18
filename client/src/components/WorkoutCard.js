import { useEffect, useState } from "react"
import styled from "styled-components"

function WorkoutCard({workout, handleDelete}){
    const [exercises, setExercises] = useState([])
    const [selectedExerciseList, setSelectedExerciseList] = useState([])
    const [reps, setReps]=useState("")
    console.log("this is a workout in workoutCard", workout)

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

            useEffect(()=>{
                fetch("http://localhost:3000/exercises")
                .then(resp=> resp.json())
                .then(exercise => setExercises(exercise))
            }, [])

    console.log("these are exercise lists in workout card", exercises)


    function deleteThisWorkout(){
        handleDelete(workout)
    }

     //add a student to the specific class..requires a refresh
     function addExerciseToWorkout(synthEvent){
        synthEvent.preventDefault()
        console.log(selectedExerciseList, workout)
        // const newExerciseList ={
        //     reps: reps,
        //     exercise_id: selectedExerciseList.id,
        //     workout_plan_id: workout.id
        // }
        // POST fetch to class_students, hit a create route.
        // fetch("http://localhost:3000/exercise_lists", {
        //         method: "POST",
        //         headers: {
        //             "Content-type": "application/json",
        //         },
        //         body: JSON.stringify(newExerciseList)})
        //         .then(resp=> resp.json())
        //         .then(newExerciseListFromDB => {
        //             setSelectedExerciseList([...exercises, newExerciseListFromDB])
        //             console.log(selectedExerciseList)
        //         })
        }
            
        
        //not sure what this is below here
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


    //in order to add an exercise (an exercise lives on an exercise list), I need to fetch all of the exercise lists that exist and map them to an select drop down. From there I can add a EL to a workout plan
    

    return(
        <WorkoutCardStyler>
        <h1>{workout.title}</h1>
        <p>{mapExerciseLists(workout)}</p>
        <ButtonStyler onClick={deleteThisWorkout}>Delete this workout</ButtonStyler>
        <ButtonStyler onClick={addExerciseToWorkout}>Add a new exercise to this workout</ButtonStyler>
        <input value = {reps} placeholder="reps" onChange={(e) => setReps(e.target.value)}/>
        <select type="text" value={selectedExerciseList} onChange={(e) => setSelectedExerciseList(e.target.value)}>
                <option >Please select an exercise list</option>
                {exercises.map(exercise =>{
                    return(
                        <option value={exercise.id} key={exercise.id}>{exercise.reps} {exercise.title}</option>
                    )
                })}
            </select>
        
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