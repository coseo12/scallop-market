import typeAlerts from '../utils/typeAlerts'

export default (msg, error) => {
  // type : success, info, warningm error
  typeAlerts(msg, 'error');
  error
  // console.log(error);
};
