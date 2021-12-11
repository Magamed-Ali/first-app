
function Buttons(props) {

    return (
        <div className="buttonClass">
            <div className='btn'>
                <button className="button-one" onClick={props.plus}>
                    plus
                </button>
                <button className="button-two" onClick={props.minus}>
                    minus
                </button>
                <button className="button-three" onClick={props.delite}>
                    delite
                </button>
            </div>
        </div>
    );
}

export default Buttons;