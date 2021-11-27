import { render } from "@testing-library/react";
import React from "react";

// class NameForm extends React.Component{
//     constructor(props){
//         super(props);
//         this.state ={
//             value: '',
//             placeholder: 'nombre...'

//         };

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     handleChange(event){
//         this.setState(
//             {value: event.target.value}
//         );
//     }

//     handleSubmit(event){
//         alert('A name was submitted: ' + this.state.value);
//         event.preventDefault();
//     }


//     render(){
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Name: <input 
//                             type="text" 
//                             value={this.state.value}
//                             placeholder = {this.state.placeholder}
//                             onChange={this.handleChange}
//                           />
//                 </label>

//                 <input type="submit" value="Submit"></input>
 
//             </form>
//         );
//     }
//}

class FlavorForm extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    
    handleChange(event){
        this.setState(
            {value : event.target.value}
        );
    }
    handleSubmit(e){
        alert('Your favourite flavour is: ' + this.state.value );
        e.preventDefault();
    }
    render(){
        return(
            <form onSubmit = {this.handleSubmit}>
                <label value="Choose your flavour: ">
                    { <select  onChange={this.handleChange}>
                         <option>Sweet</option>
                        <option>Spicy</option>
                        <option>Bitter</option>
                        <option>Sour</option>
                        <option>Salty</option> 
                    </select> 
                    }
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}
// export default NameForm;
export default FlavorForm;