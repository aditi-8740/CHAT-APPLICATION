import axios from "axios"
import Register from "./Pages/Register"

function App() {
  axios.defaults.baseURL = API_URL
  axios.defaults.withCredentials = true
  return (
    <>
      <Register />
    </>
  )
}

export default App
