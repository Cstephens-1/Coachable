import { useEffect, useState } from "react"
import styled from "styled-components"
import WorkoutCard from "./WorkoutCard"

function WorkoutLibrary(){
    const [workoutLibrary, setWorkoutLibrary]=useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/workout_plans")
        .then(resp=>resp.json())
        .then(exercise=> setWorkoutLibrary(exercise))
    }, [])

    console.log("state of workoutLibrary", workoutLibrary)


    function mapWorkouts(workoutLibrary){
        return(
            workoutLibrary.map(workout =>{
                return(
                    
                    <WorkoutCard workout={workout} key={workout.id}/>
                    
                )
            })
           
        )
    }


    return(
        <>
        <h1>Workout Templates</h1>
        <h4>Plan your next workout</h4>
        <form>
            <label>Name of workout: </label>
            <input />
            <label></label>
        </form>
        <LibaryStyler>
        {mapWorkouts(workoutLibrary)}
        </LibaryStyler>
        </>
    )
}

export default WorkoutLibrary

const LibaryStyler = styled.div`
    display: flexbox;
    flex-direction: row;
`

