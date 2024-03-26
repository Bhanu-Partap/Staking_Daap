export const accountChange = async(setState)=>{
    const account = await window.ethereum.request({
        method :"eth_requestAccounts"
    })
    const selectedAccount = account[0]
    setState(prevState=>({...prevState,selectedAccount}))
}