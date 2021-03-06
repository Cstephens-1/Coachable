import { useEffect, useState } from "react"
import styled from "styled-components"
import WorkoutCard from "./WorkoutCard"

function WorkoutLibrary(){
    const [workoutLibrary, setWorkoutLibrary]=useState([])
    const [newWorkoutTitle, setTitle] = useState("")

    //fetch existing workout plans
    useEffect(()=>{
        fetch("http://localhost:3000/workout_plans")
        .then(resp=>resp.json())
        .then(exercise=> setWorkoutLibrary(exercise))
    }, [])

    // console.log("state of workoutLibrary", workoutLibrary)

    //format the workout plans
    function mapWorkouts(){
        return(
            workoutLibrary.map(workout =>{
                return(
                    
                    <WorkoutCard workout={workout} key={workout.id} handleDelete={handleDelete}/>
                    
                )
            })
           
        )
    }

    
    //delete a workout plan
    function handleDelete(workoutPlan){
        fetch(`http://localhost:3000/workout_plans/${workoutPlan.id}`,{ 
            method: "DELETE"
        })
        let workoutPlansRemaining = workoutLibrary.filter(eachWorkoutPlan => eachWorkoutPlan.id !== workoutPlan.id);
        console.log(workoutPlansRemaining)
        setWorkoutLibrary([...workoutPlansRemaining])
    }

    function handleSubmit(synthEvent){
        synthEvent.preventDefault();
        const newWorkoutPlan = {
            title: newWorkoutTitle
            // user_id: user
        };
        fetch("http://localhost:3000/workout_plans", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(newWorkoutPlan)})
            .then(resp=> resp.json())
            .then(workoutPlanFromDataBase => setWorkoutLibrary([...workoutLibrary, workoutPlanFromDataBase]))
    }


    return(
        <>
        <h1>Workout Templates</h1>
        <h4>Plan your next workout</h4>
        <form onSubmit={handleSubmit}>
            <label>Name of workout: </label>
            <input type="text" value={newWorkoutTitle} onChange={(e) => setTitle(e.target.value)}/>
            <button type="submit">Create a new workout</button>
        </form>
        <LibaryStyler>
            {mapWorkouts()}
        </LibaryStyler>
        </>
    )
}

export default WorkoutLibrary

const LibaryStyler = styled.div`
    display: flexbox;
    flex-direction: row;
`

