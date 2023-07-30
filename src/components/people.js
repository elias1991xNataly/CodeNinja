import axios from "axios";
import { useEffect, useState } from "react";

const People = () => {
    const [people, setPeople] = useState([]);
    const [toggle, setToggle] = useState(false);


    const peopleAPI = "https://randomuser.me/api?results=5&noinfo";
    useEffect(() => {
        axios.get(peopleAPI).then(response => { setPeople(response.data) })
    }, []);
    const ArrOfPeople = people.results;


    const toggler = () => {
        setToggle(prev => !prev);
    };

    const selectPost = (event) => {
        let id = event.target.id,
            postCopy = document.getElementById('hide' + id);
        toggler.call(postCopy);
    }


    return (<div>
        {ArrOfPeople?.map((p, id) => {
            return (
                <div id={id}>
                    {console.log(p)}
                    <img src={p.picture.large} alt="" />
                    <p>Full Name: {p.name.title} {p.name.first} {p.name.last}</p>

                    <div id={'hide' + id} className={toggle ? 'hide' : 'postCopy'}>
                        <button d= {id} className="showText" onClick={selectPost}>{toggle ? <h2 id={id} className="readMore">Hide Details</h2> : <h2>Show Details</h2>}</button>
                        {toggle ? <div id={id} className={toggle ? 'hide' : 'postCopy'}>
                            <p>Gender: {p.gender}</p>
                            <p>Date Of Birth: {p.dob.date}</p>
                            <p>Age: {p.dob.age}</p>
                            <p>Email: {p.email}</p>
                            <p>Cell: {p.cell}</p>
                            <p>Nationality: {p.nat}</p>
                            <p>Phone: {p.phone}</p>
                            <p>Date of Registration: {p.registered.date}</p>
                            <p>Country of Residence: {p.location.country}</p>
                            <p>Address: {p.location.street.name} {p.location.street.number} {p.location.city} , {p.location.state}</p>
                        </div>
                            :
                            <></>
                        }
                    </div>
                </div>





            )
        })}

    </div>
    )
}


export default People;