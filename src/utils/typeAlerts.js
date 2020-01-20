import { store } from '../store'
export default (msg, type) => {
    // type : success, info, warningm error
    let item = {
        id: new Date().getTime(),
        type: type,
        msg: msg,
    };
    store.commit('SET_ALERTS_ITEM', item);
};