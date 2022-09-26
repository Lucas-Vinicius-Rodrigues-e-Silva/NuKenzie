import "./styles/reset.css"
import './App.css';
import { ToastContainer } from 'react-toastify';
import RenderPage from './components/RenderPage';

function App() {

  return (

    <div className="App">

      <ToastContainer

        position="top-center"

        autoClose={3000}

        hideProgressBar={false}

        newestOnTop={false}

        closeOnClick

        rtl={false}

        pauseOnFocusLoss

        draggable

        pauseOnHover

        theme="colored"

       
      />
      <RenderPage />

    </div>

  );
}

export default App;
