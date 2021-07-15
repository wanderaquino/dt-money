import { SummaryContainer } from "./style";
import incomeImg from "../../assets/images/entradas.svg";
import outcomeImg from "../../assets/images/saidas.svg";
import totalImg from "../../assets/images/total.svg";
import { useContext } from "react";
import { Transactions } from "../Transactions";
import { TransactionsContext } from "../../TransactionsContext";

export function Summary () {
    const {transactions} = useContext(TransactionsContext);

    const totalTransactions = transactions.reduce((accumulator, transaction) => {
            if (transaction.type === "deposit") {
                accumulator.deposits += transaction.amount;
                accumulator.total += transaction.amount
            } else {
                accumulator.withdraws += transaction.amount;
                accumulator.total -= transaction.amount
                }
            return accumulator;
            }, {
              deposits: 0,
              withdraws: 0,
              total: 0
        });

    return (
        <SummaryContainer>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Imagem entrada financeira"></img>
                </header>
                <strong>
                    { 
                        new Intl.NumberFormat("pt-BR", {style:"currency", currency: "BRL"})
                            .format(totalTransactions.deposits)
                    }
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Imagem saída financeira"></img>
                </header>
                <strong>-{ 
                        new Intl.NumberFormat("pt-BR", {style:"currency", currency: "BRL"})
                        .format(totalTransactions.withdraws)
                    }</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total financeiro"></img>
                </header>
                <strong>{new Intl.NumberFormat("pt-BR", {style:"currency", currency: "BRL"})
                            .format(totalTransactions.total)
                    }</strong>
            </div>
        </SummaryContainer>
    )
}