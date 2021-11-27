import React from 'react';
import WelcomeDialog from './contencion';
import './index.css';

  function Contacts() {
    return <div className="Contacts" />;
  }
  
  function Chat(props) {
    return (
        <div className="Chat">
            <WelcomeDialog/>
            <div  >
              {props.children}
            </div>
        </div>
    );
  }
  
  function SplitPane(props) {
    return (
      <div className="SplitPane">
        <div className="SplitPane-left">
          {props.left}
        </div>
        <div className="SplitPane-right">
          {props.right}
        </div>
      </div>
    );
  }
  
  function Split() {
    return (
      <SplitPane
        left={
          <Contacts />
        }
        right={
          <SignUpDialog />
        } />
    );
  }

class SignUpDialog extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            login: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }
    handleChange(e){
        this.setState({
            login : e.target.value
        });
    }
    handleSignUp(){
        alert(`Bienvenido abordo, ${this.state.login}`);
    }
    render(){
        return(
            <Chat title="Mars exploration program"
                  message="How should we refer to you">
                <input value={this.state.login} 
                    onChange={this.handleChange}/>
                <button onClick= {this.handleSignUp}>Enviar</button>
            </Chat>
        );
    }
}

export default Split;