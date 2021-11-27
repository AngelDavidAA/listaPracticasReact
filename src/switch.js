import React from 'react';

class Toogle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isToogleOn: true
        };

        //opcion  1 de ligado de callbacks con objeto this.
        this.handleClick = this.handleClick.bind(this);
    }

    //
    handleClick(){
        console.log("this is", this);
        this.setState(previewState => ({
            isToogleOn: !previewState.isToogleOn
        }));

    }

    //Opcion alterna2 para ligar el callback this "Experimental"
        // handleClick = ()=>{
        //     console.log('this is ', this  );
        //     this.setState(previewState =>({
        //         isToogleOn: !previewState.isToogleOn
        //     }));
        // }
    render(){
        return(
            // <button onClick={()=> this.handleClick()}>
            // {this.state.isToogleOn ? 'ON' : 'OFF'}
            // </button>
            <button onClick={this.handleClick}>
                {this.state.isToogleOn ? 'ON':'OFF'}
            </button>
        );
    }
}

export default Toogle;
