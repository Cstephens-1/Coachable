
import { useEffect, useState } from "react"
import styled from "styled-components"

function GymClassCard({gymClass, handleDelete}){

    const [classStudents, setClassStudents] = useState([])
    console.log(gymClass)
    console.log(gymClass.students)

    // function handleClick(){
    //    alert("I've been clicked")
    // }

    useEffect(()=>{
    fetch("http://localhost:3000/class_students")
    .then(resp=> resp.json())
    .then(student => setClassStudents(student))
    }, [])

    console.log("this log is in classStudents", classStudents)

    function deleteThisClass(){
        handleDelete(gymClass)
    }

    function mapStudents(gymClass){
        return(
            gymClass.students.map(student=>{
                console.log(student.id)
                return(
                    <li>{student.name}</li>
                )
            })
        )
    }

    function mapWorkouts(gymClass){
        console.log( "instance of gymclass", gymClass)
        return(
            gymClass.workout_plans.map(workout=>{
                console.log("this log comes from gymclasscard", gymClass.class_workouts)
                return(
                    <h5>{workout.title}</h5>
                )
            })
        )
    }

// function addStudentToClass(gymClass){
//     const newClassStudent= {


    // }
    // // POST fetch to class_students, hit a create route.
    // fetch("http://localhost:3000/class_students", {
    //         method: "POST",
    //         headers: {
    //             "Content-type": "application/json",
    //         },
    //         body: JSON.stringify(newClassStudent)})
    //         .then(resp=> resp.json())
    //         .then(setClassStudents(...classStudents, newClassStudent))
    // }




    return(
        <GymCardStyler>
            <h1>Level: {gymClass.level}</h1>
            <h5>{gymClass.start_time} - {gymClass.end_time}</h5>
            <p>Description: {gymClass.description}</p>
            <h5>Today's workout</h5>
            {mapWorkouts(gymClass)}
            <h5>Students:</h5>
            {mapStudents(gymClass)}
            <ButtonStyler type="submit">Add a student</ButtonStyler>
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