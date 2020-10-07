import React, {useState, useEffect} from 'react';
import Axios from 'axios'; 

import NormalUser from '../components/NormalUser';
import Mod from '../components/Mod';
import Admin from '../components/Admin';

export default function Main() {

	const [role, setRole] = useState('');

	/*If we are working on cookies need to write below code*/
	
	Axios.defaults.withCredentials = true;

	useEffect(()=>{

		Axios.get("http://localhost:3001/login").then((response) => {
			if (response.data.loggedIn == true) {
				setRole(response.data.user[0].role);
				console.log(response.data);
			}
		})

	}, [])

	return(
			<div>
				{role == 'visitor' && <NormalUser />}
				{role == 'mod' && <Mod />}
				{role == 'admin' && <Admin />}
			</div>
		)
}