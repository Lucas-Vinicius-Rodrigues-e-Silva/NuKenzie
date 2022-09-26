import "./style.css"
import nuKenzie from "../../img/Nu Kenzie.svg"
import backgroundImage from "../../img/illustration.svg"

const HomePage = ({auth, setAuth}) => {

    return (

        <div className = "body">

            <div className="infos">

                <img className="tittle-2" src={nuKenzie} alt="" />

                <h1 className="tittle-1">Centralize o controle das suas finanças</h1>

                <h3 className="headline">de forma rápida e segura</h3>

                <button className="button-standart" onClick={() => setAuth(!auth)}>Iniciar</button>

            </div>

            <img className="image-background" src={backgroundImage} alt="" /> 

        </div>
    )

}

export default HomePage