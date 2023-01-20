import { useState } from "react";
import MoneyForm from "../MoneyForm";
import List from "../List";
import TotalMoney from "../TotalMoney";
import NoRelease from "../NoRelease";
import nuKenzie from "../../img/Nu Kenzie (1).svg";
import "./style.css";

const UserPage = ({ auth, setAuth }) => {
  const [listTransactions, setListTransactions] = useState([]);

  const [filteredListTransactions, setFilteredListTransactions] =
    useState("Todos");

  const filteredTrasactions = listTransactions.filter(({ type }) =>

    filteredListTransactions === "Todos"
      ? type !== "Todos"
      : type === filteredListTransactions
  );

  return (
    <div className="content">
      <header className="menu">
        <div>
          <img src={nuKenzie} alt="Logo NuKenzie"></img>

          <button onClick={() => setAuth(!auth)}>Início</button>
        </div>
      </header>

      <section className="main-content">
        <div>
          <MoneyForm
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          ></MoneyForm>

          {listTransactions.length === 0 ? (
            <></>
          ) : (
            <TotalMoney listTransactions={listTransactions}></TotalMoney>
          )}
        </div>

        <div>
          <div className="buttons">
            <h2>Resumo financeiro</h2>

            <div>
              <button onClick={() => setFilteredListTransactions("Todos")}>
                Todos
              </button>

              <button onClick={() => setFilteredListTransactions("Entrada")}>
                Entradas
              </button>

              <button onClick={() => setFilteredListTransactions("Saída")}>
                Despesas
              </button>
            </div>
          </div>

          <ul className="list-releases">
            {listTransactions.length === 0 ? (
              <NoRelease />
            ) : (
              filteredTrasactions.map((transactions, index) => (
                <List
                  key={index}
                  actualList={transactions}
                  filteredTrasactions={filteredTrasactions}
                  setListTransactions={setListTransactions}
                />
              ))
            )}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default UserPage;
