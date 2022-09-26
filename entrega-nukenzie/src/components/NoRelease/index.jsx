import "./style.css"

import noItens from  "../../img/NoCard.svg"

const NoRelease = () => {

    return (

        <div className="no-releases">

            <h2>Você ainda não possui nenhum lançamento</h2>

            <img src={noItens} alt="" />

        </div>        

    )

}

export default NoRelease