import { useState } from 'react'
import  connectWallet  from '../../Utils/connectWallet'

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
        <button onClick={handleWallet}>Connect to MetaMask </button>
    )

}
export default Wallet;