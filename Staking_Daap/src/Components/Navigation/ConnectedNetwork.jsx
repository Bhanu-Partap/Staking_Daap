import { useContext } from "react"
import Web3Context from "../../Context/Web3Context"

export const ConnectedNetwork = () => {
    const { chainId } = useContext(Web3Context)
    if (chainId === 11155111) {
        return (
            <p>
                Connected Network is : Sepolia <br />
                Connected Chain ID is : {chainId}
            </p>
        )
    }
    else if (chainId !== 11155111) {
        return (
            <p>Unsupported network <br />
            Connected Chain ID is : {chainId}
            </p>
        )
    }
    else {
        return (
            <p>Not Connected</p>
        )
    }
}
