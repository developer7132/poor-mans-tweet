export const state = {
    showLoader: false,
    loaderMsg: "",
};

export const mutations = {
    SET_LOADER(state, payload) {
        state.showLoader = payload;
        if (payload == false) {
            state.loaderMsg = "";
        }
    },
    SET_LOADER_MSG(state, payload) {
        state.loaderMsg = payload;
        state.showLoader = true
    },
};

export const getters = {
    showLoader: ({ showLoader }) => showLoader,
    loaderMsg: ({ loaderMsg }) => loaderMsg
};

export const actions = {
    setLoader({ commit }, data) {
        commit('SET_LOADER', data)
    },
    setLoaderMsg({ commit }, data) {
        commit('SET_LOADER_MSG', data)
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
};
