import { createContext, useEffect, useState,ReactNode } from "react";
import { api } from "./services/api";

interface Transaction {
	id:number,
	title:string,
	type: string,
	categoty:string,
	amount: number,
	createdAt: string
}

interface TransactionsProvidersProps {
	children: ReactNode
}

export const TransactionsContext = createContext<Transaction[]>([]);

export function TransactionProvider({children}:TransactionsProvidersProps){
	const [Transactions,setTransactions] = useState<Transaction[]>([]);
	useEffect(() => {

		api.get('transactions').then(response => setTransactions(response.data.transactions));
	},[])

	return (
	<TransactionsContext.Provider value={Transactions}>
		{children}
	</TransactionsContext.Provider>)
}
