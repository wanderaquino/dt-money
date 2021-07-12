import { SummaryContainer } from "./style";
import incomeImg from "../../assets/images/entradas.svg";
import outcomeImg from "../../assets/images/saidas.svg";
import totalImg from "../../assets/images/total.svg";

export function Summary () {
    return (
        <SummaryContainer>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Imagem entrada financeira"></img>
                </header>
                <strong>R$ 1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Imagem saída financeira"></img>
                </header>
                <strong>- R$ 500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total financeiro"></img>
                </header>
                <strong> R$ 500,00</strong>
            </div>
        </SummaryContainer>
    )
}