import { useState } from "react";
import { GlobalStyle } from "../src/style/global"
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from 'react-modal';

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
    <>
			<GlobalStyle/>

      <Header onOpenNewTransactionModal={handleOpenTransactionModal} />

			<Modal 
				isOpen={isNewTransactionModal}
				onRequestClose={handleCloseTransactionModal}>
				<h2>Cadastrar Transação</h2>
			</Modal>

			<Dashboard />
    </>
  );
}
