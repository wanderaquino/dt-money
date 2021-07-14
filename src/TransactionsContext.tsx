import React, { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";


export const TransactionsContext = createContext<Transaction[]>([]);

interface TransactionsProviderProps {
    children: ReactNode
}

interface Transaction {
    id: number,
    name: string,
    type: string,
    amount: number,
    category: string,
    createdAt: string
}

export function TransactionsProvider ({children}: TransactionsProviderProps) {
    
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get("/transactions")
            .then(response => setTransactions(response.data.transactions));
    }, []);

    return (
        <TransactionsContext.Provider value={transactions}>
            
        </TransactionsContext.Provider>
    )
}