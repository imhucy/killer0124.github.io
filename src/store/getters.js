export const user = (state) => {
    const data = state.account.user
    return data
}

export const tenant = (state) => {
    const data = state.account.tenant
    return data
}

export const externalUser = (state) => {
    const data = state.account.externalUser
    return data
}
