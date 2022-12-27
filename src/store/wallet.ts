import { createSlice } from "@reduxjs/toolkit"

const WalletSlice = createSlice({
    name: "wallet",
    initialState: {
        accounts: [],
        balance: "",
        provider: null,
        chainId: 0,
        network: "",
        gasPrice: 0,
        blockNumber: 0,
    },
    reducers: {
        setAccounts: (state, { payload }) => {
            state.accounts = payload
        },
        setBalance: (state, { payload }) => {
            state.balance = payload
        },
        setInfo: (state, { payload }) => {
            state.chainId = payload.chainId ?? state.chainId
            state.network = payload.network ?? state.network
            state.gasPrice = payload.gasPrice ?? state.gasPrice
            state.blockNumber = payload.blockNumber ?? state.blockNumber
        },
        setProvider: (state, { payload }) => {
            state.provider = payload
        },
        logout: (state) => {
            state.accounts = []
        }
    }
})

export const { setAccounts, setBalance, logout, setProvider, setInfo } = WalletSlice.actions
export default WalletSlice.reducer
