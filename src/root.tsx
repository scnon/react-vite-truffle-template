import WalletInfo from './components/walletInfo'
import styles from '@/assets/styles/app.module.scss'

function AppRoot() {

  return (
    <div className={styles.container}>
      <WalletInfo />
    </div>
  )
}

export default AppRoot
