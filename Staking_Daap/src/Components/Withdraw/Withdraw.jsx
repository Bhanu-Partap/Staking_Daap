import {  useContext, useRef, useState } from "react"
import { ethers } from "ethers"
import Web3Context from '../../Context/Web3Context'


const Withdraw = ( ) => {

    const {stakingContract}= useContext(Web3Context)
    const withdrawTokenRef = useRef()
    const[transactionStatus, setTransactionStatus] = useState(0)
    const withdraw = async (e) => {
        await e.preventDefault();
        console.log(withdrawTokenRef);
        const amount = withdrawTokenRef.current.value.trim()
        
        console.log(amount);
        if (isNaN(amount) || amount <= 0) {
            console.error("Please enter a valid positive number");
            return;
        }
        const amountToWithdraw = ethers.parseUnits(amount, 18).toString()
        console.log(amountToWithdraw);
        try {
            const transaction = await stakingContract.withdraw(amountToWithdraw)
            setTransactionStatus("Transaction is pending... ")
            const reciept = await transaction.wait()
            if (reciept.status ===1){
                setTransactionStatus("Transaction is successfull")
                setTimeout(()=>{
                    setTransactionStatus("")
                },5000)
                withdrawTokenRef.current.value = ""
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
            <form onSubmit={withdraw}>
                <label>Withdraw Token : </label>
                <input type="text" ref={withdrawTokenRef} ></input>
                <button onClick={withdraw} type="submit" >Withdraw Token</button>
            </form>
            <br />
            {transactionStatus }
        </div>
    )

}
export default Withdraw