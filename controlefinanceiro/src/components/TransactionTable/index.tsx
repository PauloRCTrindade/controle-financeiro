
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transaction {
	id:number,
	title:string,
	type: string,
	categoty:string,
	amount: number,
	createdAt: string
}

export function TransactionsTable(){
	const [transaction,setTransaction] = useState<Transaction[]>([]);

	useEffect(() => {

		api.get('transactions').then(response => setTransaction(response.data.transactions));
	},[])
	
	return (
		<Container>
			<table>
				<thead>
					<tr>
						<th>Título</th>
						<th>Valor</th>
						<th>Categoria</th>
						<th>Data</th>
					</tr>
				</thead>

				<tbody>
					{transaction.map(transaction => ( 	
					  <tr key={transaction.id}>
						<td>{transaction.title}</td>
						<td className={transaction.type}>{transaction.amount}</td>
						<td>{transaction.categoty}</td>
						<td>{transaction.createdAt}</td>
					</tr>
					))}
				</tbody>
			</table>

		</Container>
	)
}