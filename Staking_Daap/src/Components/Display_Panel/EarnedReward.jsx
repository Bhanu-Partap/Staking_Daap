import { useState, useContext, useEffect } from "react"
import Web3Context from "../../Context/Web3Context"
import { ethers } from "ethers"

 const EarnedReward = () => {

  const { stakingContract, selectedAccount } = useContext(Web3Context)
  const [rewardEarned, setRewardEarned] = useState(0)

  useEffect(() => {
    const fetchRewardEarned = async () => {
        try {
            const rewardEarnedWei = await stakingContract.rewardsEarned(selectedAccount)
            const rewardEarnedEth = ethers.formatUnits(rewardEarnedWei.toString(),18)
            const roundReward = parseFloat(rewardEarnedEth).toFixed(2)
            console.log(roundReward);
            setRewardEarned(roundReward)
        }
        catch (error) {
            console.error("Error fetching data :", error.message);
        }
    }
    stakingContract && fetchRewardEarned()
}, [stakingContract, selectedAccount])


  return (
    <>
    <p> Total Earned Reward : {rewardEarned}</p>
    </>
  )
}
export default EarnedReward