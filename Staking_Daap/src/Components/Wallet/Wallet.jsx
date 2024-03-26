import { Children, useState } from 'react'
import  connectWallet  from '../../Utils/connectWallet'
import Web3Context from '../../Context/Web3Context'

const Wallet = ()=>{
    const [state, setState] = useState({
        provider : null,
        account:  null,
        stakingContract :  null,
        stakingTokenContract : null,
        chainId :null 
    })

    const [isLoading, setIsLoading]= useState(false)

    const handleWallet =async()=>{
        try{
            setIsLoading(true)
            const {provider,selectedAccount,stakingContract,stakingTokenContract,chainId} = await connectWallet();
            console.log(provider,selectedAccount,stakingContract,stakingTokenContract,chainId);
            setState({provider,selectedAccount,stakingContract,stakingTokenContract,chainId});
        }
        catch(error){
            console.error("Wallet Not Connected", error.message);
        }
        finally{
            setIsLoading(false)
        }
    }
    return(
        <>
        <Web3Context.Provider value= {state}>
        {Children}  
        </Web3Context.Provider>
        {isLoading && <p>Loading...</p>}
        <button onClick={handleWallet}>Connect to MetaMask </button>
        </>
    )

}
export default Wallet;