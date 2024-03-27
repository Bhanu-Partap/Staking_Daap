import { useState, useContext, useEffect } from "react"
import Web3Context from "../../Context/Web3Context"
import { ethers } from "ethers"


const StakedAmount = () => {
    const { stakingContract, selectedAccount } = useContext(Web3Context)
    const { StakedAmount, setStakedAmount } = useState("0")


    useEffect(() => {
        const fetchStakedBalance = async () => {
            try {
                const amountStaked = await stakingContract.stakedBalance(selectedAccount)
            }
            catch (error) {
                console.error("Error fetcching data :", error.message);
            }
        }
        stakingContract && fetchStakedBalance()
    }, [stakingContract, selectedAccount])

}
export default StakedAmount