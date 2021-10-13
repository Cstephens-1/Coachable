import { useEffect, useState } from "react"
import NavBar from "./NavBar"
 
 
function Mypage(){
    const [gymClasses, setGymClasses] = useState([])
 
    useEffect(() => {
        fetch("http://localhost:3000/gym_classes")
        .then(resp=> resp.json())
        .then(gymclass => setGymClasses(gymclass))
    }, [])

    console.log(gymClasses)

    // function mapClasses(gymClasses){
    //     gymClasses.map(gym_class=> {
    //         return(
    //             <GymClassCard gym_class={gym_class} />
    //         )
    //     })
    // }
 
    return(
        <div>
        <h1>Home Page</h1>
        <NavBar />
        <p>Muscle Man goes here</p>
        <h1>Today's Plans (calendar)</h1>
        <h1>My Classes(a scrolling bar of class cards with class info laid out)</h1>
        <h3>Workout pie chart to track how often muscle groups are done</h3>
        </div>
    )}
 
export default Mypage
