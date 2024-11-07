import axios from "axios"
import Register from "./Pages/Register"

function App() {
  axios.defaults.baseURL = 'https://chat-application-api-seven.vercel.app/?vercelToolbarCode=RmHhYwogb8VCEUt'
  axios.defaults.withCredentials = true
  return (
    <>
      <Register />
    </>
  )
}

export default App
