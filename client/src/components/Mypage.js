import { useEffect, useState } from "react"
import GymClassCard from "./GymClassCard"
import NavBar from "./NavBar"
 
 
function Mypage(){
    const [gymClasses, setGymClasses] = useState([])
 
    useEffect(() => {
        fetch("http://localhost:3000/gym_classes")
        .then(resp=> resp.json())
        .then(gymclass => setGymClasses(gymclass))
    }, [])

    console.log(gymClasses)

    function mapClasses(gymClasses){
            return(
                gymClasses.map(gymClass =>{
                    return(
                        <GymClassCard gymClass={gymClass} />
                    )
                })
               
            )
        }
 
    return(
        <div>
        <h1>Home Page</h1>
        <NavBar />
        <p>Muscle Man goes here</p>
        <h1>Today's Plans (calendar)</h1>
        <h3>My Classes:</h3>
        {mapClasses(gymClasses)}
        <h3>Workout pie chart to track how often muscle groups are done</h3>
        </div>
    )}
 
export default Mypage
