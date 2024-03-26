export const chainChange = async(setState)=>{
    const chainIdHex = await window.ethereum.request({
        method :"eth_chainId"
    })
    const chainId = parseInt(chainIdHex,16)
    setState(prevState=>({...prevState,chainId}))
}