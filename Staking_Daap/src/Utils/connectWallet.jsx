import { Contract, ethers } from 'ethers'
import stakingAbi from "../ABI/stakingAbi.json"
import stakingTokenAbi from "../ABI/stakeTokenAbi.json"


const connectWallet = (async () => {

    try {
        let [signer, provider, stakingContract, stakingTokenContract, chainId] = [null];
        if (window.ethereum === null) {
            throw new Error("Metamask is not installed")
        }
        let selectedAccount = await window.ethereum.request({
            method: 'eth_requestAccounts'
        })

        let chainIdHex = await window.ethereum.request({
            method: 'eth_chainId'
        })
        chainId = parseInt(chainIdHex, 16)
        selectedAccount = selectedAccount[0]
        if (!selectedAccount) {
            throw new Error("No ethereum account available")
        }
        

        provider = new ethers.BrowserProvider(window.ethereum)
        signer = await provider.getSigner()

        //================= ADDRESSES FOR CONTRACTS =====================//
        // Staking Token :  0xD77D9132459aef931Bc10Db8ceCEbDf90c5f246e
        // Reward Token : 0x969A35AC59A2ee0245547B1af43217949f803faE
        // Staking Contract : 0x9CdD5a4d1349538FFCc85Ff25bd0314F1bdA1530

        // Creating Instance
        const stakingContractAddress = "0x9CdD5a4d1349538FFCc85Ff25bd0314F1bdA1530"
        const stakingTokenContractAddress = "0xD77D9132459aef931Bc10Db8ceCEbDf90c5f246e"

        stakingContract = new Contract(stakingContractAddress, stakingAbi, signer)
        stakingTokenContract = new Contract(stakingTokenContractAddress, stakingTokenAbi, signer)

        return { provider, selectedAccount, stakingContract, stakingTokenContract, chainId }

    }
    catch (error) {
        console.error(error);
        throw error
    }
})

export default connectWallet;