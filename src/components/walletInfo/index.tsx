import { useState } from "react"
import { Button } from "antd"
import { useAppSelector } from "@/store/hook"
import WalletModal from "../walletModal"
import styles from '@/assets/styles/walletInfo.module.scss'
import { BigNumber, ethers } from "ethers"

const WalletInfo = () => {
    const [visiable, setVisiable] = useState(false)
    const accounts = useAppSelector((state: any) => state.wallet.accounts)
    const balance: BigNumber = useAppSelector((state: any) => state.wallet.balance)
    const chainId = useAppSelector((state: any) => state.wallet.chainId)
    const network = useAppSelector((state: any) => state.wallet.network)
    const gasPrice = useAppSelector((state: any) => state.wallet.gasPrice)
    const blockNumber = useAppSelector((state: any) => state.wallet.blockNumber)
    const provider: ethers.providers.Web3Provider = useAppSelector((state: any) => state.wallet.provider)

    const connect = async () => {
        setVisiable(true)
    }

    const renderConnect = () => {

        return (
            <Button type="primary" onClick={connect}>connect</Button>
        )
    }

    const renderWallet = () => {
        return (
            <div className={styles.info}>
                <label>Account: {accounts}</label>
                <label>Balance: {balance.toString()}</label>
                <label>Network: {network}</label>
                <label>ChainId: {chainId}</label>
                <label>GasPrice: {gasPrice}</label>
                <label>BlockNumber: {blockNumber}</label>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <WalletModal visiable={visiable} setVisible={setVisiable} />
            {
                accounts.length < 1 ? renderConnect() : renderWallet()
            }
        </div>
    )
}

export default WalletInfo