import styled from "styled-components"

function StudentCard({student, handleDelete}){

    console.log(student)

    function deleteThisStudent(){
        handleDelete(student)
    }

    
    return(
        <>
        <StudentCardStyler>
        <h3>{student.name}</h3>
        <p>Notes: {student.notes}</p>
        <button onClick={deleteThisStudent}>Delete Student</button>
        </StudentCardStyler>
        </>
    )
}

export default StudentCard

const StudentCardStyler = styled.div`
    width: 300px;
    border-width: 2px;
    border-style: solid;
    border-color: black;
    text-align: center;
    margin: 6px;
`