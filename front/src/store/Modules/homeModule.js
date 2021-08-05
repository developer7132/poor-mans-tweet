import * as api from "../Services/api.js";

export const state = {
  columns: [
    {
      key: 'name',
      sortable: true
    },
    {
      key: 'text',
      sortable: false
    },
    {
      key: 'created_at',
      formatter: value => {
        const date = new Date(value)
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} ${date.getMinutes()}:${date.getSeconds()}`
      },
      sortable: true
    }
  ],
  tweets: []
};

export const mutations = {
  SET_TWEETS(state, payload) {
    state.tweets = [...payload];
  },
  CREATE_TWEET(state, payload) {
    state.tweets = [
      { ...payload },
      ...state.tweets
    ];
  },
};

export const getters = {
  tweets: ({ tweets }) => tweets,
  columns: ({ columns }) => columns
};

export const actions = {
  async createTweet({ commit }, data) {
    return await api.post('tweets', data).then((response) => {
      commit('CREATE_TWEET', response.data)
      return response
    });
  },

  async getAllTweets({ commit }) {
    return await api.get('tweets').then((response) => {
      console.log(response, 'rese')
      commit('SET_TWEETS', response.data)
      return response
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
