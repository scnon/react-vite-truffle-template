class WalletConfig {
    name: string = '';
    icon: string = '';
    rpcUrl?: string = '';
    desc: string = '';

    constructor(name: string, icon: string, desc: string, rpcUrl?: string) {
        this.name = name;
        this.icon = icon;
        this.desc = desc;
        this.rpcUrl = rpcUrl;
    }
}

const wallets = [
    new WalletConfig(
        'MetaMask',
        'https://metamask.io/images/metamask-logo.png',
        'MetaMask is a bridge that allows you to visit the distributed web of tomorrow in your browser today. It allows you to run Ethereum dApps right in your browser without running a full Ethereum node.'
    ),
    new WalletConfig(
        'Trust Wallet',
        'https://trustwallet.com/assets/images/media/assets/TWT.svg',
        'Trust Wallet is a secure mobile Ethereum wallet that is easy to use. It is the best way to store your crypto assets.',
        'https://rpc.trustwallet.com',
    ),
]

export default wallets
export { WalletConfig }