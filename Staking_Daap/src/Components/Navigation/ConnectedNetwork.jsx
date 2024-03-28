import { useContext } from "react"
import Web3Context from "../../Context/Web3Context"

export const ConnectedNetwork = () => {
    const { chainId } = useContext(Web3Context)
    if (chainId === 11155111) {
        return (
            <p>
                Connected Network is : <span style={{color:"green", fontWeight:"bold"}}>Sepolia</span> <br />
                Connected Chain ID is :  <span style={{color:"green", fontWeight:"bold"}}>{chainId} </span>
            </p>
        )
    }
    else if(chainId === 0){
        return (
            <p style={{color:"red"}}><span>Connected Network :</span> Not Connected</p>
        )
    }
    else if (chainId !== 11155111) {
        return (
            <p>Connected Network : <span style={{color:"red", fontWeight:"bold"}}> Unsupported network !!</span> <br />
            </p>
        )
    }
    
}
