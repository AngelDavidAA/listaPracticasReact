import React from "react";


function MailBox (props){
    const messages = props.message.length;
    return(
        <div>
            {/* {messages > 0 &&
            <div>
                <h2>Welcome to your MailBox David!</h2>
                 <h3>You have {messages} new messages! :D</h3>
                 {console.log(messages)}
            </div>
        } */}
        {messages > 0  ? 
            <h3>You have {messages} new messages! :D</h3> : 
            <h3>You have not new messages! :D</h3>}
        </div>
    )
}
export default MailBox;