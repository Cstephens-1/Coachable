import { Link } from "react-router-dom"
import styled from "styled-components"
import CoachableLogo from "../CoachableLogo1.PNG"
 
function Login(){
 
    return(
        <>
        <ImgWrapper>
            <img src={CoachableLogo} alt="logo"/>
            </ImgWrapper>
            <ButtonWrapper>
            <ButtonStyler><Link to="/mypage">LogIn</Link></ButtonStyler>
            <ButtonStyler><Link to="/signup">Sign Up</Link></ButtonStyler>
            </ButtonWrapper>
        </>
    )
}
 
export default Login

const ButtonStyler= styled.button`
    margin: 5px;
    border-radius: 5px;
    font-size: 25px;
    background-color: skyblue;
    padding: 5px;
`

const ImgWrapper= styled.div`
    text-align: center;
    margin-top: 20vh;
    
    /* display: flex;
    position: relative; */
`

const ButtonWrapper = styled.div`
    text-align: center;
    `