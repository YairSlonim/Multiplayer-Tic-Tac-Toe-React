import React, {useState} from 'react'
import Axios from "axios";
import Cookies from "universal-cookie";

function SignUp() {
    const cookies = new Cookies();
    const [user, setUser] = useState(null)
    const [isAuth, setIsAuth] = useState(false)
    const signUp = () => {
        Axios.post("http://localhost:3001/signup", user).then((res) => {
          const { token, userId, firstName, lastName, username, hashedPassword } =
            res.data;
          cookies.set("token", token);
          cookies.set("userId", userId);
          cookies.set("username", username);
          cookies.set("firstName", firstName);
          cookies.set("lastName", lastName);
          cookies.set("hashedPassword", hashedPassword);
          setIsAuth(true);
        })
      };

    return ( 
        <div className="singUp"> 
       <label>Sing Up</label> 
        <input placeholder="First Name" onChange={(event) =>{
            setUser({...user, firstName: event.target.value})
        }} />
        <input placeholder="Last Name" onChange={(event) =>{
            setUser({...user, lastName: event.target.value})
        }} />

        <input placeholder="UserName" onChange={(event) =>{
            setUser({...user, username: event.target.value})
        }} />

        <input placeholder="Password" onChange={(event) =>{
            setUser({...user, password: event.target.value})
        }} />

            <button onClick={signUp}>SignUp</button>
        </div>
    )
}

export default SignUp