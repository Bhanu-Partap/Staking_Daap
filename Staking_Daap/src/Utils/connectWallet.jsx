import {Contract, ethers} from 'ethers'
import stakingAbi from "../ABI/stakingAbi.json"
import stakingTokenAbi from "../ABI/stakeTokenAbi.json"

const connectWallet = (async()=>{
    try{
        let [signer,provider,stakingContract, stakingTokenContract, chainId] = [null];
        if(window.ethereum === null){
            throw new Error("Metamask is not installed")
        }
        const account = await window.ethereum.request({
            method:'eth_requestAccounts'
        })
    
        let chainIdHex = await window.ethereum.request({
            method:'eth_chainId'
        }) 
        chainId = parseInt(chainIdHex,10)
        let selectedAccount = account[0]
        if(!selectedAccount){
            throw new Error("No ethereum account available")
        }
    
        provider = new ethers.BrowserProvider(window.ethereum)
        signer = await provider.getSigner()
    
        // Creating Instance
        const stakingContractAddress = "0xf8e81D47203A594245E36C48e151709F0C19fBe8"
        const stakingTokenContractAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138"
    
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