import styled from "styled-components"

function WorkoutCard({workout}){
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



    return(
        <WorkoutCardStyler>
        <h1>{workout.title}</h1>
        <p>{mapExerciseLists(workout)}</p>
        <button>Delete this workout</button>
        <button>Edit this workout</button>
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