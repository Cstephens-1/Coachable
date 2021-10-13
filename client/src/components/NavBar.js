import {Link} from "react-router-dom"
 
function NavBar(){
    return(
        <>
        <button><Link to="/mypage">Home</Link></button>
        <button><Link>My classes</Link></button>
        <button><Link>My Students</Link></button>
        <button><Link>Workout plans</Link></button>
        <button><Link>Library</Link></button>
        </>
    )
}
 
 
 
export default NavBar