
import { Outlet } from "react-router-dom"
import MainLayout from "./Components/Layout/MainLayout"
import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer"

function App() {
 
  return (
    <>
      {/* <NavBar/> */}
        <Outlet/>
      {/* </MainLayout> */}
      {/* <Footer/> */}
    </>
  )
}

export default App
