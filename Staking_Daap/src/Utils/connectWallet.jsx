import {ethers} from 'ethers'
import stakingAbi from "../ABI/stakingAbi.json"
import stakingTokenAbi from "../ABI/stakeTokenAbi.json"

export const connectWallet =  async()=> {
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
    signer = await provider.getSigners()

    // Creating Instance
    

  }
  catch(error){
    console.error(error);
    throw error 
  }
}
