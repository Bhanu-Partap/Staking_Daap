export const chainChange = async(setState)=>{
    const chainIdHex = await window.ethereum.request({
        method :"eth_chainId",
        params:[]
    })
    const chainId = parseInt(chainIdHex,16)
    setState(prevState=>({...prevState,chainId}))
}