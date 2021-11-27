import React from 'react';
import './index.css';


function FancyBorder (props){

    return(
        <div className = {'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>

    );
}

function WelcomeDialog (props){

    return(
        
        <FancyBorder color = "blue">
                <h1>Hello guys!</h1>
                <p>This is our planet. We must take care!</p>
        </FancyBorder>
    );
}

export default WelcomeDialog;