import Modal from 'react-modal';
import closeImg from '../../assets/close.svg' 
import { Container } from "./styles";

interface NewTransactionModalPros {
	isOpen:boolean;
	onRequestClose: () => void;

}
export function NewTransactionModal({isOpen,onRequestClose}:NewTransactionModalPros){
	return (

			
			<Modal 
				isOpen={isOpen}
				onRequestClose={onRequestClose}
				overlayClassName="react-modal-overlay"
				className="react-modal-contet"
			
			>

			<button type="button" 
				onClick={onRequestClose} 
				className="react-modal-close"
			>

				<img src={closeImg} alt="fechar" />
			</button>
				
				

			<Container>
				<h2>Cadastrar Transação</h2>

				<input
					placeholder="Título" 
				/>

				<input
					placeholder="Valor"
					type="number" 
				/>

				<input 
					placeholder="Categoria"
				/>

				<button type="submit">
					Cadastrar
				</button>
			</Container>
			
			</Modal>

		
	)
}