import { useContext } from "react"
import Web3Context from "../../Context/Web3Context"

export const ConnectedNetwork = () => {
    const { chainId } = useContext(Web3Context)
    return (
        <p>
            Connected Network : {chainId}
        </p>
    )
}
