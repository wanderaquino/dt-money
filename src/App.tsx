import {GlobalStyle} from "./styles/global";
import { Header } from "./components/Header/index";
import { Dashboard } from "./components/Dashboard";
import Modal from "react-modal";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./TransactionsContext";
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
    <TransactionsProvider>
      <GlobalStyle />
      <Header onOpenNewTrasactionModal={handleOpenTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpenModal={isTransactionModalOpened}
        onRequestCloseModal={handleCloseTransactionModal}/>
    </TransactionsProvider>
  );
}