import { useState } from "react"
import HomePage from "../HomePage"
import UserPage from "../UserPage"

const RenderPage = () => {

    const [auth, setAuth] = useState(true)
    

return (

    <main>

          {auth ? <HomePage auth = {auth} setAuth = {setAuth}></HomePage> : <UserPage auth = {auth} setAuth = {setAuth}></UserPage> }

    </main>

)

}

export default RenderPage