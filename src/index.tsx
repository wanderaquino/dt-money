import ReactDOM from 'react-dom';
import {App} from './App';
import { createServer } from "miragejs";

createServer({
  routes() {
    this.namespace = "api";
    this.get("/transactions", () => {
      return [{
        id: 1,
        title: "Transação 01",
        amount: 400,
        type: "deposit",
        category: "Food",
        createdAt:  new Date()
      }]
    })
  }
})

ReactDOM.render(
    <App />,
  document.getElementById('root')
);