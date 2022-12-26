import { logout, setAccount } from "@/store/provider"
import { ethers } from "ethers"
import { useAppDispatch, useAppSelector } from "@/store/hook"
import { Button } from "antd"

const WalletInfo = () => {
    const dispatch = useAppDispatch()
    const account = useAppSelector((state: any) => state.provider.account)

    const connect = async () => {
        const network = (window as any).ethereum
        const provider = new ethers.providers.Web3Provider(network, "any")
        let res = await provider.send("eth_requestAccounts", []);
        console.log(res)
        dispatch(setAccount(res[0]))
    }

    const disconnect = () => {
        dispatch(logout())
        console.log('disconnect')
    }

    return (
        <div>
            {
                account ? <Button type="primary" onClick={connect}>connect</Button>
                : <Button type="primary" onClick={disconnect}>Disconnect</Button>
            }
        </div>
    )
}

export default WalletInfo