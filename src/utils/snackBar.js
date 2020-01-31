import { store } from '../store'

export default (msg, color) => {
    // type : success, info, error, cyan darken-2
    let item = {
        color,
        msg,
    };
    store.commit('SET_ALERTS_SNACK', item);
};