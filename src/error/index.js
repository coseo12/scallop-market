import typeAlerts from '../utils/typeAlerts'

export default (store, msg, error) => {
  // type : success, info, warningm error
  typeAlerts(store, msg, 'error');
  console.log(error);
};
