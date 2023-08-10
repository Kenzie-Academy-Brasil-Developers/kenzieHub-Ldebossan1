import { RoutesMain } from "./Routes/RoutesMain"
import "./styles/App.scss"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <>
     <RoutesMain />
     <ToastContainer/>
    </>
  )
}

export default App
