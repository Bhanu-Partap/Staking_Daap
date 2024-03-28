import { useState, useContext, useRef } from "react"
import { ethers } from "ethers"


const TokenApproval = ( ) => {
    const approvedTokenRef = useRef()
    const approveToken = async (e) => {
        // if (e) {
        //     e.preventDefault(); 
        // } else {
        //     console.error("Event object is missing");
        //     return;
        // }
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
    }

    return (
        <div>
            <form onSubmit={approveToken}>
                <label>Token Approval : </label>
                <input type="text" ref={approvedTokenRef} ></input>
                <button onClick={approveToken} type="submit" >Token Approval</button>
            </form>

        </div>
    )

}
export default TokenApproval