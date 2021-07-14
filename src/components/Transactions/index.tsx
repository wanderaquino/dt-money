import { TransactionsContext } from "../../TransactionsContext";
import { TransactionsContainer } from "./styles";
import { useContext } from "react";

export function Transactions () {
    const transactions = useContext(TransactionsContext);
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
                {transactions.map((transaction) => (
                <tr key={transaction.id}>
                    <td>{transaction.name}</td>
                    <td className={transaction.type}>{new Intl.NumberFormat(
                        "pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        }
                    ).format(transaction.amount)}</td>
                    <td>{transaction.category}</td>
                    <td>{transaction.createdAt}</td>
                </tr>
                ))}
            </tbody>
        </table>
    </TransactionsContainer>
    )
}