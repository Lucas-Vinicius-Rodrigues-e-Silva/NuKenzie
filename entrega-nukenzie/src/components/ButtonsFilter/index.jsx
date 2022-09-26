import "./style.css"

const ButtonsFilter = ({listTransactions, filteredListTransactions, setFilteredListTransactions}) => {

    

    return (

            <div className="buttons">

                <h2>Resumo financeiro</h2>
                
                <div>

                    <button onClick={() => setFilteredListTransactions ("Todos")} >Todos</button>

                    <button onClick={() => setFilteredListTransactions ("Entrada")} >Entradas</button>

                    <button onClick={() => setFilteredListTransactions ("Saída")} >Despesas</button>

                </div>

            </div>
        
    )

}

export default ButtonsFilter
