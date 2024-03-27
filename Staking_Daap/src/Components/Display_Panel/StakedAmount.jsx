import { useState, useContext, useEffect } from "react"
import Web3Context from "../../Context/Web3Context"
import { ethers } from "ethers"


const StakedAmount = () => {
    const { stakingContract, selectedAccount } = useContext(Web3Context)
    const { StakedAmount, setStakedAmount } = useState("0")


    useEffect(() => {
        const fetchStakedBalance = async () => {
            try {
                console.log(selectedAccount);   
                const amountStaked = await stakingContract.stakedBalance(selectedAccount)
                console.log(amountStaked);
            }
            catch (error) {
                console.error("Error fetching data :", error.message);
            }
        }
        stakingContract && fetchStakedBalance()
    }, [stakingContract, selectedAccount])

}
export default StakedAmount