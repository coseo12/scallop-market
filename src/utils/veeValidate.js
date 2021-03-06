import { required, max, min, email } from 'vee-validate/dist/rules';
import { extend } from 'vee-validate';

extend("required", {
    ...required,
    message: 'This field is required',
});

extend("max", {
    ...max,
    message: "This field must be {length} characters or less"
});

extend("min", {
    ...min,
    message: "This field must be {length} characters or more"
});

extend("email", {
    ...email,
    message: "This field must be a valid email"
});

extend("confirm", {
    params: ['target'],
    validate(value, { target }) {
        return value === target;
    },
    message: "Password confirmation does not match"
});