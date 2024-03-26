import { Children, useEffect, useState } from 'react'
import  connectWallet  from '../../Utils/connectWallet'
import Web3Context from '../../Context/Web3Context'
import { accountChange } from '../../Utils/AccountChange'
import { chainChange, chaniChange } from '../../Utils/chainChange'

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
    useEffect(()=>{
     window.ethereum.on("Account Changed : ", ()=>accountChange(setState))   
     window.ethereum.on("Chain Changed : ", ()=>chainChange(setState))   
    })


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