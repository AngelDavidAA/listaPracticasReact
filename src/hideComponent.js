import React from 'react';
import './index.css';

function WarningBanner(props) {
    if(!props.warn){ return null;}
    return(
        <div className="Warning">
            Warning!
        </div>
    );
}

class Page extends React.Component{
    constructor(props){
        super(props);
        this.state = {showWarning : true};

        this.handleToogleClick = this.handleToogleClick.bind(this);
    }

    handleToogleClick (){
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }

    render(){
        return(
            <div>
                <WarningBanner warn ={this.state.showWarning}/>
                <button className="btnDesign"onClick = {this.handleToogleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}
export default Page;