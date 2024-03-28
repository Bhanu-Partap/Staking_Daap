
import './App.css'
import Navigation from './Components/Navigation/Navigation'
import Wallet from './Components/Wallet/Wallet'
import DisplayPanel from "./Components/Display_Panel/DisplayPanel"
import TokenApproval from './Components/StakeToken/TokenApproval'

function App() {


  return (
    <>
      <Wallet>
        <Navigation />
        <DisplayPanel />
        <TokenApproval />
      </Wallet>
    </>
  )
}

export default App
