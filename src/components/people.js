import axios from "axios";
import { useEffect, useState } from "react";
import Details from "./Details/Details";


const People = () => {
    const [people, setPeople] = useState([]);
    const [personChosen, setPersonChosen] = useState([]);


    const peopleAPI = "https://randomuser.me/api?results=5&noinfo";
    useEffect(() => {
        axios.get(peopleAPI).then(response => { setPeople(response.data) })
    }, []);
    const ArrOfPeople = people.results;





    const showInformation = (person) => {
        setPersonChosen(person);
    }



    return (<div className="flex  space-y-10 space-x-96 p-20">
        <div className="space-y-10">
            {ArrOfPeople?.map((person, index) => {
                return (
                    <div key={index} className="space-y-5">
                        {console.log(person)}
                        <img src={person.picture.large} alt="" />
                        <p>Full Name: {person.name.title} {person.name.first} {person.name.last}</p>
                        <button id={index} className="bg-slate-700 rounded-md p-2 text-white" onClick={() => { showInformation(person) }}>  Information</button>


                    </div>





                )
            })}
        </div>
        <div>
            <Details info={personChosen} users={ArrOfPeople} />
        </div>
    </div>
    )
}


export default People;