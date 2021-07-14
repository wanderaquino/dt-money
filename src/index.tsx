import ReactDOM from 'react-dom';
import {App} from './App';
import { createServer, Model } from "miragejs";

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData(
      {
        transactions: [
          {id: 1, name: "Transação de Trabalho", amount: 6000, type: "deposit", category: "Trabalho Extra", createdAt: new Date("2021-01-01 09:00:00")},
          {id: 2, name: "Mercado", amount: 60, type: "withdraw", category: "Despesa Alimentos", createdAt: new Date("2021-01-02 09:00:00")},
          {id: 3, name: "DayTrade", amount: 600, type: "deposit", category: "Trabalho Extra", createdAt: new Date("2021-01-03 09:00:00")},
          {id: 4, name: "Reparo com Carro", amount: 900, type: "withdraw", category: "Despesa veículo", createdAt: new Date("2021-01-04 09:00:00")},
          {id: 5, name: "Freelance Web", amount: 9000, type: "deposit", category: "Trabalho Extra", createdAt: new Date("2021-01-05 09:00:00")}
        ]
      }
    )
  },
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    })

    this.post("/transactions", (schema, requestData) => {
      const data = JSON.parse(requestData.requestBody);
      return schema.create("transaction", data);
    })
  }
})

ReactDOM.render(
    <App />,
  document.getElementById('root')
);