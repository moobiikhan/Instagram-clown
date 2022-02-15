import React from "react";

const Signin = ()=>{
    return(
        <div className="mycard">
            <div className="card auth-card">
                <h4>Instagram</h4>
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Password" />
                <a className="waves-effect waves-light btn">Login</a> 
            </div>
        </div>
    )
}

export default Signin;