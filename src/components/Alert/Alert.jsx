
export default function Alert(props) {
    const alertBtnHandler = () => {
        setTimeout(() => {
            document.querySelector('.alert').style.display="none"
        },1000)
    }
    return (
    <>
    <div className="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Success!</strong> {props.Text}
        <button type="button" onClick={alertBtnHandler} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    </>
    )
}