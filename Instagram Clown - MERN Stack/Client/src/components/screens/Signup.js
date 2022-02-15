import React from "react";

const Signup = ()=>{
    return(
        <div className="mycard">
        <div className="card auth-card">
            <h4>Instagram</h4>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <a className="waves-effect waves-light btn">Signin</a> 
        </div>
    </div>
    )
}

export default Signup;