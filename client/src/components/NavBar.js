import {Link} from "react-router-dom"
import styled from "styled-components"
 
function NavBar(){
    return(
        <NavBarStyler>
        <ButtonStyler><Link to="/mypage">Home</Link></ButtonStyler>
        <ButtonStyler><Link to="/myclasses">My classes</Link></ButtonStyler>
        <ButtonStyler><Link to="/library">Library</Link></ButtonStyler>
        <ButtonStyler><Link to="/students">My Students</Link></ButtonStyler>
        <ButtonStyler><Link to="/workouts">Workouts</Link></ButtonStyler>
        <ButtonStyler><Link to="/">Logout</Link></ButtonStyler>
        </NavBarStyler>
    )
}
 
 
 
export default NavBar

const NavBarStyler = styled.div`
    background-color: skyblue;
    /* height: 100vh;
    width: 150px; */
    display: flex;
    flex-direction: row;
    /* position: fixed; */
`

const ButtonStyler = styled.button`
    border-radius: 8px;
    font-size: 22px;
    margin: 4px;
    background-color: white;

    
`