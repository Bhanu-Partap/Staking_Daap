import { useState, useContext, useEffect } from "react"
import Web3Context from "../../Context/Web3Context"
import { ethers } from "ethers"

 const RewardRate = () => {
  const { stakingContract, selectedAccount } = useContext(Web3Context)
  const [rewardRate, setRewardRate] = useState(0) 

  useEffect(() => {
    const fetchRewardRate = async () => {
        try {
            const rewardRateWei = await stakingContract.Reward_Rate()
            const rewardRateEth = ethers.formatUnits(rewardRateWei.toString(),18)
            // console.log(rewardRateEth);
            setRewardRate(rewardRateEth)
        }
        catch (error) {
            console.error("Error fetching data :", error.message);
        }
    }
    stakingContract && fetchRewardRate()
}, [stakingContract, selectedAccount])

return(
  <p>Reward Rate : {rewardRate} token / seconds</p>
)

}
export default RewardRate