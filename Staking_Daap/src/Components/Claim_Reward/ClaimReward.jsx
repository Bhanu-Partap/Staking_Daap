import {  useContext, useState } from "react"
import Web3Context from '../../Context/Web3Context'


const ClaimReward = ( ) => {

    const {stakingContract}= useContext(Web3Context)
    const[transactionStatus, setTransactionStatus] = useState(0)
    const claimReward = async () => {
        try {
            const transaction = await stakingContract.claimReward()
            const reciept = await transaction.wait()
            if (reciept.status ===1){
                setTransactionStatus("Transaction is successfull")
                setTimeout(()=>{
                    setTransactionStatus("")
                },5000)
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
            <form onSubmit={claimReward}>
                <label>Claim Reward : </label>
                <input type="text" ></input>
                <button onClick={claimReward} type="submit" >Claim Reward</button>
            </form>
            <br />
            {transactionStatus }
        </div>
    )

}
export default ClaimReward