import { useState } from "react";
import "./style.css";
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MoneyForm = ({ listTransactions, setListTransactions }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);
  const [type, setType] = useState("");

  function receivedMoney(event) {
    event.preventDefault();

    if (type === "") {
      toast.error("Insira um tipo de valor válido!", {
        position: "top-center",

        autoClose: 3000,

        hideProgressBar: false,

        closeOnClick: true,

        pauseOnHover: true,

        draggable: true,

        progress: undefined,
      });

      setDescription("");

      setValue("");

      setType("");
    } else if (value <= 0) {
      toast.error("Insira um valor maior que 0!", {
        position: "top-center",

        autoClose: 3000,

        hideProgressBar: false,

        closeOnClick: true,

        pauseOnHover: true,

        draggable: true,

        progress: undefined,
      });

      setDescription("");

      setValue("");

      setType("");
    } else {
      setListTransactions([
        ...listTransactions,
        { description: description, type: type, value: value },
      ]);

      setDescription("");

      setValue("");

      setType("");
    }
  }

  return (
    <form onSubmit={receivedMoney} className="standart-form">
      <div className="description-input">
        <label htmlFor="description">Descrição</label>

        <input
          type="text"
          required
          placeholder="Digite aqui a sua descrição"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <label htmlFor="description">Ex: Compra de roupas</label>
      </div>

      <div className="type-and-value">
        <div className="value">
          <label htmlFor="quantity">Valor</label>

          <input
            type="number"
            required
            placeholder="R$"
            name="quantity"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </div>

        <div className="type">
          <label htmlFor="in-out">Tipo de Valor</label>

          <select
            placeholder="Entrada"
            name="in-out"
            value={type}
            onChange={(event) => setType(event.target.value)}
          >
            <option>--</option>

            <option>Entrada</option>

            <option>Saída</option>
          </select>
        </div>
      </div>

      <button type="submit">Inserir Valor</button>
    </form>
  );
};

export default MoneyForm;
