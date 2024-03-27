import { useEffect, useState, Children } from 'react'
import connectWallet from '../../Utils/connectWallet'
import Web3Context from '../../Context/Web3Context'
import { accountChange } from '../../Utils/AccountChange'
import { chainChange } from '../../Utils/chainChange'



const Wallet = ({children}) => {
    const [state, setState] = useState({
        provider: null,
        account: null,
        stakingContract: null,
        stakingTokenContract: null,
        chainId: null
    })

    const [isLoading, setIsLoading] = useState(false)

    const handleWallet = async () => {
        try {
            setIsLoading(true)
            const { provider, selectedAccount, stakingContract, stakingTokenContract, chainId } = await connectWallet();
            console.log(provider, selectedAccount, stakingContract, stakingTokenContract, chainId);
            setState({ provider, selectedAccount, stakingContract, stakingTokenContract, chainId });
        }
        catch (error) {
            console.error("Wallet Not Connected", error.message);
        }
        finally {
            setIsLoading(false)
        }

    }
    useEffect(() => {
        window.ethereum.on("accountChanged", () => accountChange(setState))
        window.ethereum.on("chainChanged", () => chainChange(setState))

        return () => {
            window.ethereum.removeListener("accountChanged", () => accountChange(setState))
            window.ethereum.removeListener("chainChanged", () => chainChange(setState))
        }
    }, [])


    return (
        <>
            <Web3Context.Provider value={state}>
                {children}
            </Web3Context.Provider>
            {isLoading && <p>Loading...</p>}
            <button onClick={handleWallet}>Connect to MetaMask </button>
        </>
    )
}
export default Wallet;
