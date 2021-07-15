import { NewTransactionModalContainer, TransactionTypeContainer, TransactionTypeButton } from "./style";
import {useTransactions} from "../../hooks/useTransactions";
import Modal from "react-modal";
import closeImg from "../../assets/images/close.svg";
import incomeImg from "../../assets/images/entradas.svg";
import outcomeImg from "../../assets/images/saidas.svg";
import { useContext, ChangeEvent, FormEvent, MouseEvent, useState } from "react";

interface NewTransactionModalProps {
    isOpenModal: boolean,
    onRequestCloseModal: () => void
};

interface Transaction {
    name: string,
    type: string,
    amount: number,
    category: string,
    createdAt: string
}

const defaultState = {
    name: "",
    type: "",
    amount: 0,
    category: ""
}

export function NewTransactionModal({isOpenModal,onRequestCloseModal}:NewTransactionModalProps) {
    const [transactionType, setTrasactionType] = useState("");
    const [newTransaction, setNewTransaction] = useState<Transaction>({} as Transaction); 
    const {createTransaction} = useTransactions();


    function handleSelectTransactionType (e: MouseEvent<HTMLButtonElement>){
        const transactionType = e.currentTarget.name;
        setTrasactionType(transactionType);
        setNewTransaction((previousState) => ({...previousState,type:transactionType}));
    }

   async function handleSubmitNewTransaction (e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        await createTransaction(newTransaction);
        setNewTransaction(prevState => ({...prevState, defaultState}))
        onRequestCloseModal();
    }

    function handleChangeInput(e:ChangeEvent<HTMLInputElement>) {
        const inputName = e.target.name;
        const value = e.target.value;
        setNewTransaction((previousState) => ({...previousState,[inputName]: value}))
    }

    function handleChangeTransactionValue(e:ChangeEvent<HTMLInputElement>) {
        const amountName = e.target.name;
        const value = Number(e.target.value);
        setNewTransaction((previousState) => ({...previousState,[amountName]: value}))

    }
    return (
        <Modal
            isOpen={isOpenModal} 
            onRequestClose={onRequestCloseModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <NewTransactionModalContainer onSubmit={e => handleSubmitNewTransaction(e)}>
                <button type="button" className={"modal-close-button"} onClick={onRequestCloseModal}>
                    <img src={closeImg} alt="Fechar Modal"></img>
                </button>
                <h2>Cadastrar Transação</h2>
                <input name="name" onChange={(e) => handleChangeInput(e)} type="text" placeholder="Nome"/>
                <input name="amount" onChange={(e) => handleChangeTransactionValue(e)} type="number" placeholder="Valor"/>
                <TransactionTypeContainer>
                    <TransactionTypeButton
                        type="button"
                        name="deposit"
                        onClick={e => handleSelectTransactionType(e)}
                        color={transactionType === 'deposit' ? "green" : "transparent"}
                    >
                            <img src={incomeImg} alt="Imagem para entrada financeira"/>
                        Entrada
                    </TransactionTypeButton>
                    <TransactionTypeButton
                        type="button"
                        name="withdraw"
                        onClick={e => handleSelectTransactionType(e)}
                        color={transactionType === 'withdraw' ? "red" : "transparent"}>
                            <img src={outcomeImg} alt="Imagem para saída financeira"/>
                        Saída
                    </TransactionTypeButton>
                </TransactionTypeContainer>

                <input name="category" type="text" onChange={(e) => handleChangeInput(e)} placeholder="Categoria"/>
                <button type="submit">Cadastrar</button>
            </NewTransactionModalContainer>
        </Modal>
    )
}