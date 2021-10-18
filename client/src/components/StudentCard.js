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
        <ButtonStyler onClick={deleteThisStudent}>Delete Student</ButtonStyler>
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

const ButtonStyler= styled.button`
    margin: 5px;
    border-radius: 5px;
    font-size: 15px;
    background-color: skyblue;
    padding: 5px;
`