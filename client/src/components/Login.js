import { Link } from "react-router-dom"
import CoachableLogo from "../CoachableLogo1.PNG"
 
function Login(){
 
    // function handleSubmit(event){
    //     event.preventDefault()
        
    // }
    return(
        <>
            <img src={CoachableLogo} alt="logo"/>
            <button><Link to="/mypage">LogIn</Link></button>
            <button><Link to="/signup">Sign Up</Link></button>
        </>
    )
}
 
export default Login