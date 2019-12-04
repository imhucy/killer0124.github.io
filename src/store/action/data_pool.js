export default {
    addPool ({commit}, {poolName, uuid, object}) {
        commit('ADD_POOL', {poolName, uuid, object})
    }
}
