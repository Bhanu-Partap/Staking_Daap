import {  useContext, useRef, useState } from "react"
import { ethers } from "ethers"
import Web3Context from '../../Context/Web3Context'

const StakeAmount = () => {

    const { stakingContract}= useContext(Web3Context)
    const stakeAmountRef = useRef()
    const[transactionStatus, setTransactionStatus] = useState(0)
    const stakeToken = async (e) => {
        await e.preventDefault();
        console.log(stakeAmountRef);
        const amount = stakeAmountRef.current.value.trim()
        
        console.log(amount);
        if (isNaN(amount) || amount <= 0) {
            console.error("Please enter a valid positive number");
            return;
        }
        const amountToStake = ethers.parseUnits(amount, 18).toString()
        console.log(amountToStake);
        try {
            const transaction = await stakingContract.stake(amountToStake)
            setTransactionStatus("Transaction is pending... ")
            const reciept = await transaction.wait()
            if (reciept.status ===1){
                setTransactionStatus("Transaction is successfull")
                setTimeout(()=>{
                    setTransactionStatus("")
                },5000)
                stakeAmountRef.current.value = ""
            }
            else{
                    setTransactionStatus("Transaction failed !")
                }
        } catch (error) {
            console.error("Staking failed !!", error.message);
        }
    }

    return (
        <div>
            <form onSubmit={stakeToken}>
                <label>Stake Token : </label>
                <input type="text" ref={stakeAmountRef} ></input>
                <button onClick={stakeToken} type="submit" >Stake Token</button>
            </form>
            <br /> 
            {transactionStatus }
        </div>
    )

}
export default StakeAmount