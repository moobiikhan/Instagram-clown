import React from "react";

const Profile = ()=>{
    return(
        <div>
            <div 
            style={{display: "flex", justifyContent:"space-around", margin:"18px 0px", borderBottom:"1px solid grey"}}>
                <div>
                    <img style={{width:"160px", height:"160px", borderRadius:"80px"}}
                    src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVvcGxlfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                </div>
                <div>
                    <h3>Johnny Bravo</h3>
                    <div style={{display:"flex", justifyContent:"space-between", width:"109%"}}>
                        <h6> 40 Posts</h6>
                        <h6> 40 Followers</h6>
                        <h6> 40 Following</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;