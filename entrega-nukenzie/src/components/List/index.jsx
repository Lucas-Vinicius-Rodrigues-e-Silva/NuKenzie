import "./style.css";

import { FaTrash } from "react-icons/fa";

const List = ({ filteredTrasactions, setListTransactions, actualList }) => {
  function deleteRelease() {
    return setListTransactions(
      filteredTrasactions.filter((trasaction) => trasaction !== actualList)
    );
  }

  return (
    <li className="releases">
      <div
        className="on-off"
        style={{
          backgroundColor:
            actualList.type === "Entrada" ? "#03B898" : "#FD377E",
        }}
      ></div>

      <div className="description-and-type">
        <h3>{actualList.description}</h3>

        <p>{actualList.type}</p>
      </div>

      <div className="value-and-delete">
        <span>R${actualList.value},00</span>

        <div>
          <FaTrash onClick={deleteRelease} />
        </div>
      </div>
    </li>
  );
};

export default List;
