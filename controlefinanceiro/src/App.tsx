import { useState } from "react";
import { GlobalStyle } from "../src/style/global"
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from 'react-modal';
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionProvider, TransactionsContext } from "./TransactionsContext";

Modal.setAppElement('#root');

export function App() {

	const [isNewTransactionModal,setIsNewTransactionModal] = useState(false);

	function handleOpenTransactionModal(){
		setIsNewTransactionModal(true);

	}

	function handleCloseTransactionModal(){
		setIsNewTransactionModal(false);
	}
  return (
    <TransactionProvider>
			<GlobalStyle/>

      <Header onOpenNewTransactionModal={handleOpenTransactionModal} />

			<NewTransactionModal
			  isOpen={isNewTransactionModal}
			  onRequestClose={handleCloseTransactionModal} />


			<Dashboard />
    </TransactionProvider>
  );
}
