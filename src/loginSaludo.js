import React from 'react';
import MailBox from './mailbox';

// const messages = ['Msj1','Msj2','Msj3'];
const messages = [];



function UserGreeting (props){
    return(
        <MailBox message={messages}/>        
    );
}

function GuestGreeting(props){
    return <h1>Please sign up.</h1>;
}
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){ 
        return<UserGreeting/>
    }else{
        
        return <GuestGreeting/>
    }
}

export default Greeting;