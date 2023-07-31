import React, { useState } from 'react';

const Details = ({ info }) => {
	const [personInfo, setPersonInfo] = useState([])

	if (info.length !== 0 && info !== personInfo) {
		setPersonInfo(info)

	}

	if (personInfo.length !== 0) {
		return (<div className='bg-stone-400 p-3 space-y-5 px-16'>
			<p className="font-gray-300">Gender: {info.gender}</p>
			<p>Date Of Birth: {info.dob.date}</p>
			<p>Age: {info.dob.age}</p>
			<p>Email: {info.email}</p>
			<p>Cell: {info.cell}</p>
			<p>Nationality: {info.nat}</p>
			<p>Phone: {info.phone}</p>
			<p>Date of Registration: {info.registered.date}</p>
			<p>Country of Residence: {info.location.country}</p>
			<p>Address: {info.location.street.name} {info.location.street.number} {info.location.city} , {info.location.state}</p>

		</div>)
	} else {
		return (<div></div>)
	}


}
export default Details;
