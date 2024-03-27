
import './App.css'
import Navigation from './Components/Navigation/Navigation'
import Wallet from './Components/Wallet/Wallet'
import DisplayPanel from "./Components/Display_Panel/DisplayPanel"

function App() {


  return (
    <>
      <Wallet>
        <Navigation />
        <DisplayPanel />
      </Wallet>
    </>
  )
}

export default App
