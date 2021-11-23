import { Container } from "./styles";

export function TransactionsTable(){
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
					<tr>
						<td>Desenvolvimento</td>
						<td className="deposit">R$12.000</td>
						<td>Trabalho</td>
						<td>12/12/20112</td>
					</tr>

					<tr>
						<td>Aluguel</td>
						<td className="withdraw">- R$1.000</td>
						<td>Trabalho</td>
						<td>12/12/20112</td>
					</tr>

					<tr>
						<td>Desenvolvimento</td>
						<td>R$12.000</td>
						<td>Trabalho</td>
						<td>12/12/20112</td>
					</tr>

					<tr>
						<td>Desenvolvimento</td>
						<td>R$12.000</td>
						<td>Trabalho</td>
						<td>12/12/20112</td>
					</tr>
				</tbody>
			</table>

		</Container>
	)
}