import { useState, useContext, useEffect, useRef } from "react"
import { ethers } from "ethers"



 const TokenApproval = () => {

    const approvedTokenRef = useRef()
    const approveToken = async(e)=>{
        e.preventDefault();
        const amount = approvedTokenRef.current.value.trim()
        if(isNaN(amount) || amount<=0){
            console.error("Please enter a valid positive number");
            return;
        }
        const amountToSend = ethers.parseUnits(amount,18).toString()
        console.log(amountToSend);
    }
    
return(
    <div>
        <form action="" onSubmit={approveToken}>
            <label>Token Approvaal</label>
            <input type="text" />
            <button onClick={approveToken} ref={approveToken} type="submit" label= "Token Approve" ></button>
        </form>

    </div>
)

}
export default TokenApproval