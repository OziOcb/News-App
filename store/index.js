export const state = () => ({
  articles: [],
})

export const getters = {
  getArticles(state) {
    return state.articles
  },
}

export const actions = {
  async setArticles({ commit }, params) {
    const { country, category } = params

    try {
      const response = await this.$axios.get(
        `top-headlines?country=${country || 'gb'}&category=${category}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.API_KEY}`,
          },
        }
      )

      commit('SET_ARTICLES', response.data.articles)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },
}

export const mutations = {
  SET_ARTICLES(state, articles) {
    state.articles = articles
  },
}
