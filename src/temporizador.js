
import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component{
    // 1
    constructor(props){
        super(props);
        this.state = { 
            date: new Date()
        };
    }
    // 3
    componentDidMount(){
        this.timerID = setInterval(
            ()=> this.tick(),1000
        );
    }

    // 5
    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    // 4
    tick(){
        this.setState({
            date: new Date()
        }
        );
    }
    
    // 2
    render(){
        return(
            <div>
                <h3>Son las
                     {this.state.date.toLocaleTimeString()}
                </h3>
            </div>
        );
    }


   
}

function App(params) {
      return(
          <div>
            <Clock/>
            <Clock/>
            <Clock/>
          </div>
      );  
}

export default App;