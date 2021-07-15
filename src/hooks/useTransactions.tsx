import { createContext, ReactNode, useEffect, useState, useContext } from "react";
import { api } from "../services/api";

interface TransactionsProviderProps {
    children: ReactNode
}

interface TransactionsContextData {
    transactions: Transaction[],
    createTransaction: (transaction:TransactionInput) => Promise<void>
}

interface Transaction {
    id: number,
    name: string,
    type: string,
    amount: number,
    category: string,
    createdAt: string
}

type TransactionInput = Omit<Transaction, "id">;

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);
export function TransactionsProvider ({children}: TransactionsProviderProps) {
    
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get("/transactions")
            .then(response => setTransactions(response.data.transactions));
    }, [TransactionsContext]);

   async function createTransaction (transactionInput: TransactionInput) {
    
    const date = new Intl.DateTimeFormat('pt-BR').format(new Date());    
    const trasactionResponse = await api.post("/transactions", transactionInput);
    const {transaction} = trasactionResponse.data;
    transaction["createdAt"] = date;

    setTransactions (prevState => [
            ...prevState, transaction
        ]);
    };

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
};
export function useTransactions () {
    const context = useContext(TransactionsContext);
    return context;
}