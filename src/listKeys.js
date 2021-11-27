import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



function NumberList (props){
    const list = [2,3,4,5,6];
    return(
            <ul>
                {list.map((nums)=>
                <li key ={nums.toString()}> {nums*5}</li>)}
            </ul>   
    );
}

export default NumberList;