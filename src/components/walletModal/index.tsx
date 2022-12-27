import { App, Modal, notification } from 'antd'
import React from 'react'
import WalletItem from '../walletItem'
import wallets from '@/configs/wallets'
import styles from '@/assets/styles/walletModal.module.scss'
import type { NotificationPlacement } from 'antd/es/notification/interface';

const WalletModal: React.FC<{visiable: boolean, setVisible: any}> = ({ visiable, setVisible }) => {
    const { message, notification, modal } = App.useApp();

    const handleCancel = () => {
        setVisible(false)
    }

    const handleCallback = (success: boolean, err?: any) => {
        if(success) {
            setVisible(false)
            notification.success({
                message: 'Success',
                description: 'Connect wallet success',
                duration: 2,
            });
        } else {
            notification.error({
                message: 'Error',
                description: err.message,
                placement: 'top',
            });
        }
    }
    
    return (
        <Modal title='Select your wallet' className={styles.container} open={visiable} footer={null} maskClosable={true} onCancel={handleCancel}>
            {
                wallets.map((wallet, index) => {
                    return (
                        <WalletItem key={index} config={wallet} callback={handleCallback} />
                    )
                })
            }
        </Modal>
    )
}

export default WalletModal