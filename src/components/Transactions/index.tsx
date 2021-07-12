import { TransactionsContainer } from "./styles";

export function Transactions () {
    return (
    <TransactionsContainer>
        <table>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Preço</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Desenvolvimento de Site</td>
                    <td>R$ 1000,00</td>
                    <td>Venda</td>
                    <td>10/04/2021</td>
                </tr>
                <tr>
                    <td>Aluguel de Carro</td>
                    <td>- R$ 200,00</td>
                    <td>Transporte</td>
                    <td>10/04/2021</td>
                </tr>
                <tr>
                    <td>Mercado</td>
                    <td>-R$ 600,00</td>
                    <td>Alimentação</td>
                    <td>10/04/2021</td>
                </tr>
            </tbody>
        </table>
    </TransactionsContainer>
    )
}