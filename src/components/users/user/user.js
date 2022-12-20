import {useState} from "react";

function User(props) {
let {user}=props;
const [userInfo,setUserInfo]=useState([])
    let btn=false;
    return(
    <div>
            <h1 hidden={btn}>dwa</h1>
       <h1>{user.name}</h1>
        <button onClick={()=>btn==true}> dadwadwad</button>
    </div>
)
}
export default User;