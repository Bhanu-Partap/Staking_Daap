import { useContext } from 'react'
import Web3Context from '../../Context/Web3Context'

export const ConnectedAccounts = () => {
    const { selectedAccount } = useContext(Web3Context)
    return(
        <p>
            Connected Account : {selectedAccount}
        </p>
    )
}




