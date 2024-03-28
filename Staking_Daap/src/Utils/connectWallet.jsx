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
        // Staking Contract : 0xFB0F4d1dcD5c08Ed907E1338beA4F860e5C5B848

        // Creating Instance
        const stakingContractAddress = "0x86D9BE1eD833D788CbDF7176FbA00a808d6Fd1CB"
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