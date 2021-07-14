import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { TransactionsContainer } from "./styles";

interface Transaction {
    id: number,
    name: string,
    type: string,
    amount: number,
    category: string,
    createdAt: string
}

export function Transactions () {

    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get("/transactions")
            .then(response => setTransactions(response.data.transactions));
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