


const state = {
    isLogged: false,
}

const mutations = {
    setLogged(state, payload) {
        state.isLogged = payload
    }
}

const actions = {

    setLogged({ commit }, payload) {
        commit('setLogged', payload)
    }
}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}