import { NewTransactionModalContainer, TransactionTypeButton, TransactionTypeContainer } from "./style";
import Modal from "react-modal";
import closeImg from "../../assets/images/close.svg";
import incomeImg from "../../assets/images/entradas.svg";
import outcomeImg from "../../assets/images/saidas.svg";
import { MouseEventHandler, useState } from "react";

interface NewTransactionModalProps {
    isOpenModal: boolean,
    onRequestCloseModal: () => void
}
export function NewTransactionModal({isOpenModal,onRequestCloseModal}:NewTransactionModalProps) {
    const [transactionType, setTrasactionType] = useState("");

    const lightGreen = "#CFF9E2";
    const lightRed = "#F9CFCF"; 

    function handleSelectIncomeTransactionType () {
        setTrasactionType('income');
        console.log(transactionType);
    }

    function handleSelectOutcomeTransactionType () {
        setTrasactionType('outcome');
    }

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
                <TransactionTypeContainer>

                    <TransactionTypeButton onClick={e => {e.preventDefault(); handleSelectIncomeTransactionType()}}>
                            <img src={incomeImg} alt ="Ícone de Entrada Financeira"></img>
                            Entrada
                    </TransactionTypeButton>

                    <TransactionTypeButton onClick={e => {e.preventDefault(); handleSelectOutcomeTransactionType()}}>
                            <img src={outcomeImg} alt="Ícone de saída Financeira"></img>
                            Saída
                    </TransactionTypeButton>

                </TransactionTypeContainer>
                <input type="text" placeholder="Categoria"/>
                <button type="submit">Cadastrar</button>
            </NewTransactionModalContainer>
        </Modal>
    )
}