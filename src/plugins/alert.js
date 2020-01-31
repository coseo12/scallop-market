import typeAlert from '../utils/typeAlert'
import snackBar from '../utils/snackBar'

export default {
    install(Vue) {
        Vue.prototype.$_typeAlert = typeAlert;
        Vue.prototype.$_snackBar = snackBar;
    }
}