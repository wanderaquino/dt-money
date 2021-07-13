import { NewTransactionModalContainer } from "./style";
import Modal from "react-modal";
import closeImg from "../../assets/images/close.svg";

interface NewTransactionModalProps {
    isOpenModal: boolean,
    onRequestCloseModal: () => void
}
export function NewTransactionModal({isOpenModal,onRequestCloseModal}:NewTransactionModalProps) {
    return (
        <Modal
            isOpen={isOpenModal} 
            onRequestClose={onRequestCloseModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <NewTransactionModalContainer>
                <button type="button" onClick={onRequestCloseModal}>
                    <img src={closeImg} alt="Fechar Modal"></img>
                </button>
                <h2>Cadastrar Transação</h2>
                <input type="text" placeholder="Nome"/>
                <input type="text" placeholder="Valor"/>
                <input type="text" placeholder="Categoria"/>
                <button type="submit">Cadastrar</button>
            </NewTransactionModalContainer>
        </Modal>
    )
}