import {GlobalStyle} from "./styles/global";
import { Header } from "./components/Header/index";
import { Dashboard } from "./components/Dashboard";
import Modal from "react-modal";
import { useState } from "react";
Modal.setAppElement("#root");


export function App() {
  
  const [isTransactionModalOpened, setIsTransactionModalOpened] = useState(false);

  function handleOpenTransactionModal() {
      setIsTransactionModalOpened(true);
  }

  function handleCloseTransactionModal() {
      setIsTransactionModalOpened(false);
  }
  return (
    <>
      <GlobalStyle />
      <Header onOpenNewTrasactionModal={handleOpenTransactionModal} />
      <Dashboard />
      <Modal
        isOpen={isTransactionModalOpened} 
        onRequestClose={handleCloseTransactionModal}
      >
        <h2>Cadastrar Transação</h2>
      </Modal>
    </>
  );
}