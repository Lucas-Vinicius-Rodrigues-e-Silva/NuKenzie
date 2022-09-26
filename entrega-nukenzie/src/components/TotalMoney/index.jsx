import "./style.css"

const TotalMoney = ({listTransactions}) => {

    const finalResult = listTransactions.reduce((actualValue, previousValue) => {

        const balance = parseInt(previousValue.value)

        const type = previousValue.type

        if(type === "Entrada"){

           return  actualValue + balance

        } else if(type === "Saída"){

            return actualValue - balance

        }

    },0)

    return (

        <div className="total-money">

            <div>

                <p>Valor Total:</p>

                <span>O valor se refere ao saldo</span>

            </div>
            
           <span> R${finalResult},00</span>

        </div>

    )

}

export default TotalMoney