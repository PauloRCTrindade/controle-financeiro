/* eslint-disable @typescript-eslint/no-redeclare */
import { useState } from 'react'
import  logoImg from '../../assets/logo.svg'
import Modal from 'react-modal';
import { Container, Content } from './styles'

interface Header {
	onOpenNewTransactionModal:() => void;
}

export function Header({onOpenNewTransactionModal}:Header){

	return (
		<Container>
			<Content>
				<img src={logoImg} alt="controle financeiro" />
				<button type="button" onClick={onOpenNewTransactionModal}>Nova Transação</button>
			</ Content >


		</Container>
	)
}