import { NewTransactionModalContainer, TransactionTypeContainer, TransactionTypeButton } from "./style";
import Modal from "react-modal";
import closeImg from "../../assets/images/close.svg";
import incomeImg from "../../assets/images/entradas.svg";
import outcomeImg from "../../assets/images/saidas.svg";
import { useState } from "react";

interface NewTransactionModalProps {
    isOpenModal: boolean,
    onRequestCloseModal: () => void
}
export function NewTransactionModal({isOpenModal,onRequestCloseModal}:NewTransactionModalProps) {
    const [transactionType, setTrasactionType] = useState("");
    const incomeColor = "light-green";
    const outcomeColor = "light-red";

    function handleSelectIncomeTransactionType (){
        setTrasactionType('deposit');
        console.log(transactionType);
    }

    function handleSelectOutcomeTransactionType () {
        setTrasactionType('withdraw');
        console.log(transactionType);
    }

    return (
        <Modal
            isOpen={isOpenModal} 
            onRequestClose={onRequestCloseModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <NewTransactionModalContainer>
                <button type="button" className={"modal-close-button"} onClick={onRequestCloseModal}>
                    <img src={closeImg} alt="Fechar Modal"></img>
                </button>
                <h2>Cadastrar Transação</h2>
                <input type="text" placeholder="Nome"/>
                <input type="text" placeholder="Valor"/>
                <TransactionTypeContainer>
                    <TransactionTypeButton
                        type="button"
                        onClick={handleSelectIncomeTransactionType}
                        color={transactionType === 'deposit' ? incomeColor : ""}
                    >
                            <img src={incomeImg} alt="Imagem para entrada financeira"/>
                        Entrada
                    </TransactionTypeButton>
                    <TransactionTypeButton
                        type="button"
                        onClick={handleSelectOutcomeTransactionType}
                        color={transactionType === 'withdraw' ? outcomeColor : ""}>
                            <img src={outcomeImg} alt="Imagem para saída financeira"/>
                        Saída
                    </TransactionTypeButton>
                </TransactionTypeContainer>

                <input type="text" placeholder="Categoria"/>
                <button type="submit">Cadastrar</button>
            </NewTransactionModalContainer>
        </Modal>
    )
}