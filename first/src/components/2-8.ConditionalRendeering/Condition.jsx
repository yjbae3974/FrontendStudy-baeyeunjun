import React from 'react'

function UserGreeeting(props){
    return(
        <div>Welcome, {props.name}, it's {props.count} time</div>
    )
}

function Greeting(props){
    if(props.isLoggedIn === true){
        <UserGreeeting name="jimmy" count={0} />
    }
    else{
        <div>is not Logged in..</div>
    }
}

export default function Condition() {
    const isLoggedIn = false
    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn}></Greeting>
        </div>
    )
}
