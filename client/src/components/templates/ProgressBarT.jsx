    import "../../styles/templates/ButtonT.css";

    function ProgressBarT ({bar_w, barCont_w, barCont_h}) {
        return (
            <div>
                <div className="progress-container" style={{ width: `${barCont_w}%`, height: `${barCont_h}px`}}>
                    <span className="bar" style={{ width: `${bar_w}%` }}></span>
                </div>
            </div>
        );
}

export default ProgressBarT;