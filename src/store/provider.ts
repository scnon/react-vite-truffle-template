import { createSlice } from "@reduxjs/toolkit"

const ProviderSlice = createSlice({
    name: "provider",
    initialState: {
        account: null,
    },
    reducers: {
        setAccount: (state, { payload }) => {
            state.account = payload
        },
        logout: (state) => {
            state.account = null
        }
    }
})

export const { setAccount, logout } = ProviderSlice.actions
export default ProviderSlice.reducer
