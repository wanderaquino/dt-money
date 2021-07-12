import { useEffect } from "react";
import { api } from "../../services/api";
import { TransactionsContainer } from "./styles";

export function Transactions () {

    useEffect(() => {
        api.get("/transactions")
            .then(response => console.log(response.data));
    }, []);

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
                    <td >Desenvolvimento de Site</td>
                    <td className="deposit">R$ 1000,00</td>
                    <td>Venda</td>
                    <td>10/04/2021</td>
                </tr>
                <tr>
                    <td>Aluguel de Carro</td>
                    <td className="withdraw">- R$ 200,00</td>
                    <td>Transporte</td>
                    <td>10/04/2021</td>
                </tr>
                <tr>
                    <td>Mercado</td>
                    <td className="withdraw">-R$ 600,00</td>
                    <td>Alimentação</td>
                    <td>10/04/2021</td>
                </tr>
            </tbody>
        </table>
    </TransactionsContainer>
    )
}