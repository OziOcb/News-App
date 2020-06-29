export const state = () => ({
  articles: [],
  isFetching: false,
})

export const getters = {
  getArticles(state) {
    return state.articles
  },
  getIsFetching(state) {
    return state.isFetching
  },
}

export const actions = {
  async setArticles({ commit, dispatch }, params) {
    dispatch('toggleIsFetching', true)
    const { country, category } = params

    try {
      const response = await this.$axios.get(
        `top-headlines?country=${
          country || 'gb'
        }&category=${category}&apiKey=6d47d491f5894f70ae7d64d1ea96df3d`
      )

      commit('SET_ARTICLES', response.data.articles)
    } catch (error) {
      console.log(error)
    }

    dispatch('toggleIsFetching', false)
  },

  toggleIsFetching({ commit }, isFetching) {
    commit('TOGGLE_IS_FETCHING', isFetching)
  },
}

export const mutations = {
  SET_ARTICLES(state, articles) {
    state.articles = articles
  },
  TOGGLE_IS_FETCHING(state, isFetching) {
    state.isFetching = isFetching
  },
}
