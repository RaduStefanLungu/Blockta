import "../../styles/templates/ButtonT.css";

function ButtonT (props) {
    return (
        <div>
            <button className="but">{props.content}</button>
        </div>
    );
}

export default ButtonT;