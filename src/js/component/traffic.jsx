import React, {useState} from "react";


const Traffic = () => {

    const [ colors , setColor] = useState (["red","yellow","green"])
    const [currentColor, setCurrentColor] = useState("red");
    


    return (
        <div clasName="container" >
        <div className="trafficLight">
        { colors.map (( color ) => (<span 
        key= {color}
        className={` ${color} ${currentColor === color ? 'glow' : ''}`}
        onClick={() => setCurrentColor(color)}> </span>  ))}
        </div>
        </div>
    );
};


export default Traffic;