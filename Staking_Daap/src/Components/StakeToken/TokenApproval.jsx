import {  useContext, useRef, useState } from "react"
import { ethers } from "ethers"
import Web3Context from '../../Context/Web3Context'



const TokenApproval = ( ) => {

    const {stakingTokenContract, stakingContract}= useContext(Web3Context)
    const approvedTokenRef = useRef()
    const[transactionStatus, setTransactionStatus] = useState(0)
    const approveToken = async (e) => {
        await e.preventDefault();
        console.log(approvedTokenRef);
        const amount = approvedTokenRef.current.value.trim()
        
        console.log(amount);
        if (isNaN(amount) || amount <= 0) {
            console.error("Please enter a valid positive number");
            return;
        }
        const amountToSend = ethers.parseUnits(amount, 18).toString()
        console.log(amountToSend);
        try {
            const transaction = await stakingTokenContract.approve(stakingContract.target, amountToSend)
            setTransactionStatus("Transaction is pending... ")
            const reciept = await transaction.wait()
            if (reciept.status ===1){
                setTransactionStatus("Transaction is successfull")
                setTimeout(()=>{
                    setTransactionStatus("")
                },5000)
                approvedTokenRef.current.value = ""
            }
            else{
                    setTransactionStatus("Transaction failed !")
                }
        } catch (error) {
            console.error("Token approval failed", error.message);
        }
    }

    return (
        <div>
            <form onSubmit={approveToken}>
                <label>Token Approval : </label>
                <input type="text" ref={approvedTokenRef} ></input>
                <button onClick={approveToken} type="submit" >Token Approval</button>
            </form>
            <br />
            {transactionStatus }
        </div>
    )

}
export default TokenApproval