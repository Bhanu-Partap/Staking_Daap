import {ethers} from 'ethers'
import stakingAbi from "../ABI/stakingAbi.json"
import stakingTokenAbi from "../ABI/stakeTokenAbi.json"

export default function connectWallet =async()=> {
  try{
    let [signer,provider,stakingContract, stakingTokenContract, chainId] = [null];
    if(window.ethereum === null){
        throw new Error("Metamask is not installed")
    }
    const account = await window.ethereum.request({
        method:"eth_requestAccounts"
    })
  }
  catch(error){
    console.error(error);
    throw error 
  }
}
