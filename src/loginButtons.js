import React from 'react';
import Greeting from './loginSaludo';
// import ReactDOM from 'react-dom';


function LoginInButton(props) {
    return(
        <button onClick={props.onClick}>
            Login
        </button>
    );
}
function LoginOutButton(props){
    return(
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

class LoginControl extends React.Component{
    constructor(props){
        super(props);
        
        this.handleLogInClick = this.handleLogInClick.bind(this);
        this.handleLogOutClick = this.handleLogOutClick.bind(this);
        
        this.state = {
            isLoggedIn: false,
        }
    }

    handleLogOutClick(){
        this.setState({isLoggedIn: false});
    }   
    
    handleLogInClick(){
        this.setState({isLoggedIn: true});
    }

    render(){
        const isLoggedIn = this.state.isLoggedIn;
        let button; 

        if(isLoggedIn){
            button = <LoginOutButton onClick={this.handleLogOutClick}/>;
        }else{
            button = <LoginInButton onClick={this.handleLogInClick}/>;
        }
        return(
            <div>
                <Greeting isLoggedIn = {isLoggedIn}/>
                {button}
            </div>
        );
    }
}

// ReactDOM.render(
//     <LoginControl/>,
//     document.getElementById('root')
// );
export default LoginControl;
