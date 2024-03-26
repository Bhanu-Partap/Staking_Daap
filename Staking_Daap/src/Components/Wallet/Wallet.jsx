import { useState } from 'react'

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
            const {provider,account,stakingContract,stakingTokenContract,chainId} = await connectWallet();
            setState({provider,account,stakingContract,stakingTokenContract,chainId});
        }
        catch(error){
            console.error("Wallet Not Connected", error.message);
        }
        finally{
            setIsLoading(false)
        }
    }

}
export default Wallet;