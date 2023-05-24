import '../App.css';

function Alert({ alertText, setAlertText }) {
    function ok() {
        setAlertText("");
    }
    return (
        <div className="fondoGris" style={{ display: alertText ? "block" : "none" }}>
            <div className="alert bg-white shadow">
                <h5>Aviso</h5>
                <div style={{ "textAlign": "center" }}>
                    <p>{alertText}</p>
                </div>
                <div>
                    <button type="button" className="btn btn-primary" onClick={ok}>Ok</button>
                </div>
            </div>
        </div>
    );
}
export default Alert
