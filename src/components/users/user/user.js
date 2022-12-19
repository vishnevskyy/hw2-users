import {useState} from "react";

function User(props) {
let {user}=props;
const [userInfo,setUserInfo]=useState([])
    let btn=null;
    return(
    <div>
        <h1>{user.name}</h1>
            <div>
                <h3>{userInfo.name}</h3>
                <h2>{userInfo.username}</h2>
                <button hidden={!userInfo.name} onClick={()=>setUserInfo([])}> Close</button>
            </div>
        <button hidden={userInfo.name} onClick={()=>setUserInfo(user)}>Info</button>
    </div>
)
}
export default User;