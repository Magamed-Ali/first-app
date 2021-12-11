
import Number from "./Number";
import Buttons from "./Buttons";
import {useState} from "react";


function MainContent(props) {
    let [counter, setCounter] = useState(0);
    function plus(){
        setCounter(counter+1)
    }
    function minus(){
        setCounter(counter-1)
    }
    function  delite(){
        setCounter(0)
    }
    return (
        <div className="main-content">
            <Number counter={counter}/>
            <Buttons plus={plus} minus={minus} delite={delite} />
        </div>
    );
}

export default MainContent;