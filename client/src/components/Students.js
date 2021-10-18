import { useEffect, useState } from "react"
import styled from "styled-components"
import StudentCard from "./StudentCard"

function Students(){
    const [studentList, setStudentList] = useState([])
    const [newName, setNewName] = useState("")
    const [newNote, setNewNote] = useState("")


    function handleDelete(student){
        fetch(`http://localhost:3000/students/${student.id}`,{ 
            method: "DELETE"
        })
        let studentsRemaining = studentList.filter(eachStudent => eachStudent.id !== student.id);
        console.log(studentsRemaining)
        setStudentList([...studentsRemaining])
    }

    useEffect(() =>{
        fetch("http://localhost:3000/students")
        .then(resp=> resp.json())
        .then(student => setStudentList(student))
    }, [])

    function mapStudents(studentList){
        return(
            studentList.map(student =>{
                return(
                    
                    <StudentCard student={student} key={student.id} handleDelete={handleDelete}/>
                    
                )
            })
           
        )
    }

    function handleSubmit(synthEvent){
        synthEvent.preventDefault();
        const newStudent = {
            name: newName,
            notes: newNote
            // user_id: user
        };
        fetch("http://localhost:3000/students", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(newStudent)})
            .then(resp=> resp.json())
            .then(setStudentList(...studentList, newStudent))
    }


    return(
        <>
        <h1>My students</h1>
        <form onSubmit={handleSubmit}>
            <h4>Add a new student</h4>
            <label>Name: </label>
            <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)}/>
            <label>Notes: </label>
            <input type="text" value={newNote} onChange={(e) => setNewNote(e.target.value)}/>
            <button type="submit" >Add a new student</button>

        </form>
        <LibaryStyler>
        {mapStudents(studentList)}
        </LibaryStyler>
        </>
    )
}

export default Students

const LibaryStyler = styled.div`
    display: flexbox;
    flex-direction: row;
`