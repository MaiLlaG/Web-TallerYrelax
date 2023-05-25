import '../App.css';

function Alert({ alertText, setAlertText }) {
    function ok() {
        setAlertText("");
    }
    return (
        <div className="fondoGris" style={{ display: alertText ? "block" : "none" }}>
            <div className="alert bg-white shadow">
                <h5 className="text-danger">Aviso</h5>
                <div className="text-center">
                    <p>{alertText}</p>
                </div>
                <div className="d-flex justify-content-end">
                    <button type="button" className="btn btn-primary rounded-1" onClick={ok}>Ok</button>
                </div>
            </div>
        </div>
    );
}
export default Alert

