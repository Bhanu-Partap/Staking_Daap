import { useContext } from 'react'
import Web3Context from '../../Context/Web3Context'

const ConnectedAccounts = () => {
    const { selectedAccount } = useContext(Web3Context)
    console.log(selectedAccount);
}

export default ConnectedAccounts


