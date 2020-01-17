export default {
  SET_NAVIGATION_DRAWER(state, payload) {
    state.navigation_drawers.drawer = payload;
  },
  SET_NAVIGATION_ITEMS(state, payload) {
    state.navigation_drawers.items = payload;
  },
  SET_ALERTS_ITEMS(state, payload) {
    state.alerts.items = payload;
  },
  SET_ALERTS_ITEM(state, payload) {
    state.alerts.items.push(payload);
  },
  SET_POLICY(state, payload) {
    state.policy = payload;
  },
};
