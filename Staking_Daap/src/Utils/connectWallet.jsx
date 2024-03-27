import {Contract, ethers} from 'ethers'
import stakingAbi from "../ABI/stakingAbi.json"
import stakingTokenAbi from "../ABI/stakeTokenAbi.json"

const connectWallet = (async()=>{
    try{
        let [signer,provider,stakingContract, stakingTokenContract, chainId] = [null];
        if(window.ethereum === null){
            throw new Error("Metamask is not installed")
        }
        let selectedAccount = await window.ethereum.request({
            method:'eth_requestAccounts'
        })
    
        let chainIdHex = await window.ethereum.request({
            method:'eth_chainId'
        }) 
        chainId = parseInt(chainIdHex,16)
         selectedAccount = selectedAccount[0]
        if(!selectedAccount){
            throw new Error("No ethereum account available")
        }
    
        provider = new ethers.BrowserProvider(window.ethereum)
        signer = await provider.getSigner()

//================= ADDRESSES FOR CONTRACTS =====================//
        // Staking Token :  0x7061D16bEE4f5410593bF760941b62434b58a1D4
        // Reward Token : 0x749D0db0510744d50652AFCcd549d32973d3ea38
        // Staking Contract : 0x024BA12Ab9a0Db9c5490CBf250D4CBf57746CabB
    
        // Creating Instance
        const stakingContractAddress = "0x024BA12Ab9a0Db9c5490CBf250D4CBf57746CabB"
        const stakingTokenContractAddress = "0x7061D16bEE4f5410593bF760941b62434b58a1D4"
    
        stakingContract = new Contract(stakingContractAddress, stakingAbi,signer)
        stakingTokenContract = new Contract(stakingTokenContractAddress, stakingTokenAbi,signer)
    
        return{provider,selectedAccount, stakingContract, stakingTokenContract, chainId}
    
      }
      catch(error){
        console.error(error);
        throw error 
      }
})

export default connectWallet;