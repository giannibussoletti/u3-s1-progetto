import { Modal } from "react-bootstrap"

const ModalError = function (props) {
  return (
    <div className="modal show" style={{ display: "block", position: "initial" }}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{"Si è verificato un errore " + props.error}</Modal.Title>
        </Modal.Header>
      </Modal.Dialog>
    </div>
  )
}

export default ModalError
