import react, {useState} from "react";

export default function Contador(params) {
    const [count, setCount] = useState(0)

    return(
        <div>
            <h1>Contador: {count} </h1>
            <button 
                class="btn btn-primary"
                onClick = {()=>
                    setCount(count + 2)
                }>
                    Click
            </button>
        </div>
    )
    
}