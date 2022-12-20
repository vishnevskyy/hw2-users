import {useEffect, useState} from "react";
import User from "./user/user";
const Users=()=> {
    const [users,setUsers]=useState([]);
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(json => setUsers(json))

    return (
        <div>{
         users.map(user=>(<User key={user.id} user={user}/>))
        }</div>
    )
}
export {Users};