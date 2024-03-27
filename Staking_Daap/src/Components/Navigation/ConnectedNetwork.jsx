import { useContext } from "react"
import Web3Context from "../../Context/Web3Context"

export const ConnectedNetwork = () => {
    const { chainId } = useContext(Web3Context)
    if(chainId ===11155111){
        return (
            <p>
                Connected Network is : Sepolia
            </p>
        )
    }
    else if(!chainId ===11155111){
        return(
            <p>Unsupported network</p>
        )
    }
    else{
        return(
            <p>Not Connected</p>
        )
    }
}
