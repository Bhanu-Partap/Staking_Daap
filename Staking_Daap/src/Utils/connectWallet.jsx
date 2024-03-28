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
        // Staking Token :  0x37F348601fc753682C706da3EC35D785fD128f85
        // Reward Token : 0x969A35AC59A2ee0245547B1af43217949f803faE
        // Staking Contract : 0x786cEeCB38bF1C058ebB2afA75D91904dc2DBb62

        // Creating Instance
        const stakingContractAddress = "0x786cEeCB38bF1C058ebB2afA75D91904dc2DBb62"
        const stakingTokenContractAddress = "0x37F348601fc753682C706da3EC35D785fD128f85"

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