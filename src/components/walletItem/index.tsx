import { ethers } from "ethers"
import { useAppDispatch } from "@/store/hook"
import { setAccounts, setProvider, setInfo, setBalance } from "@/store/wallet"
import styles from '@/assets/styles/walletItem.module.scss'
import { WalletConfig } from "@/configs/wallets"

const WalletItem: React.FC<{ config: WalletConfig, callback?: Function }> = ({ config, callback }) => {
    const dispatch = useAppDispatch()

    const connect = () => {
        let network = config.rpcUrl ? new ethers.providers.JsonRpcProvider(config.rpcUrl) : (window as any).ethereum;
        let provider = new ethers.providers.Web3Provider(network);

        provider.send('eth_requestAccounts', []).then((res: any[]) => {
            dispatch(setAccounts(res))
            dispatch(setProvider(provider))

            if (res.length > 0) {
                let account = res[0]
                console.log(account)
                provider.getBalance(account).then((res: any) => {
                    console.log("get balance: ", res)
                    dispatch(setBalance(ethers.utils.formatEther(res)))
                }).catch((err: any) => {
                    console.log("get balance error: ", err)
                })
            }

            if(callback) {
                callback(true)
            }
        }).catch((err: any) => {
            if(callback) {
                callback(false, err)
            }
        });

        provider.getNetwork().then((res: any) => {
            dispatch(setInfo({
                chainId: res.chainId,
                network: res.name,
            }))
        }).catch((err: any) => {
            console.log("get network error: ", err)
        })

        provider.getGasPrice().then((res: any) => {
            dispatch(setInfo({
                gasPrice: ethers.utils.formatEther(res)
            }))
        }).catch((err: any) => {
            console.log("get gas price error: ", err)
        })

        provider.getBlockNumber().then((res: any) => {
            dispatch(setInfo({
                blockNumber: res
            }))
        }).catch((err: any) => {
            console.log("get block number error: ", err)
        })
    }

    return (
        <div className={styles.container} onClick={connect}>
            <img src={config.icon} alt={config.name} className={styles.icon} />
            <div className={styles.name}>{config.name}</div>
        </div>
    )
}

export default WalletItem