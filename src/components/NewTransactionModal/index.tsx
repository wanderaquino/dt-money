import { NewTransactionModalContainer } from "./style";
import Modal from "react-modal";

interface NewTransactionModalProps {
    isOpenModal: boolean,
    onRequestCloseModal: () => void
}
export function NewTransactionModal({isOpenModal,onRequestCloseModal}:NewTransactionModalProps) {
    return (
        <Modal
            isOpen={isOpenModal} 
            onRequestClose={onRequestCloseModal}
        >
            <NewTransactionModalContainer>
                <h2>Cadastrar Transação</h2>
                <input type="text" placeholder="Nome"/>
                <input type="text" placeholder="Valor"/>
                <input type="text" placeholder="Categoria"/>
                <button type="submit">Cadastrar</button>
            </NewTransactionModalContainer>
        </Modal>
    )
}