import React from "react";

const Data = (props) => {
    return(
        <div style={{textAlign:"center"}}>
            <h2>Assiagment</h2>
            Name: {props.User.name}
            <br />
            Email:{props.User.email}
            <br />
            Country:{props.User.country}
        </div>
    )
}

export default Data;