import axios from "axios"
import Register from "./Pages/Register"

function App() {
  axios.defaults.baseURL = 'http://localhost:8000'
  axios.defaults.withCredentials = true
  return (
    <>
      <Register />
    </>
  )
}

export default App