import Error from '../error/index.js'

export default {
  async FETCH_DRAWER({ commit }, payload) {
    try {
      commit('SET_DRAWER', payload);
    } catch (error) {
      Error(error);
    }
  },
};
