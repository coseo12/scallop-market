export default (store, msg, type, error) => {
  alert('test');
  let item = {
    id: new Date().getTime(),
    type: type,
    msg: msg,
    error: error,
  };
  store.state.alerts.items.push(item);
};
