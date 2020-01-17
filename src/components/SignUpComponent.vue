<template>
  <ValidationObserver ref="obs" v-slot="{ invalid, validated, passes }">
    <v-card class="elevation-4">
		<v-toolbar 
		dark
		prominent
		src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
		>
			<v-toolbar-title>Sign Up</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form>
            <ValidationProvider name="email" rules="required|email"  v-slot="{ errors, valid }">
            <v-text-field
                v-model="email"
                :error-messages="errors"
                :success="valid"
                label="E-mail"
                required
            ></v-text-field>
            </ValidationProvider>
            <ValidationProvider name="password" rules="required|min:8|max:20|confirm:@confirm" v-slot="{ errors, valid }">
                <v-text-field
                type="password"
                v-model="password"
                :counter="20"
                :error-messages="errors"
                :success="valid"
                label="Password"
                required
                ></v-text-field>
            </ValidationProvider>
            <ValidationProvider name="confirm" rules="required|min:8|max:20|confirm:@password" v-slot="{ errors, valid }">
                <v-text-field
                type="password"
                v-model="confirmPassword"
                :counter="20"
                :error-messages="errors"
                :success="valid"
                label="Confirm Password"
                required
                ></v-text-field>
            </ValidationProvider>
            <ValidationProvider name="Name" rules="required|min:2|max:10" v-slot="{ errors, valid }">
                <v-text-field
                v-model="name"
                :counter="10"
                :error-messages="errors"
                :success="valid"
                label="Full Name"
                required
                ></v-text-field>
            </ValidationProvider>
            <ValidationProvider rules="required" name="policy" v-slot="{ errors, valid }">
              <v-checkbox
                  v-model="policy"
                  :error-messages="errors"
                  :success="valid"
                  value="1"
                  label="I agree to Use & Privacy policy"
                  type="checkbox"
                  required
              ></v-checkbox>
            </ValidationProvider>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn large color="primary" @click="passes(submit)" :disabled="invalid || !validated">Sign Up</v-btn>
        <v-btn text large color="primary" @click="clear">Clear</v-btn>
        <v-spacer></v-spacer>
        <!-- <v-btn @click="validate">Validate</v-btn> -->
        <v-btn text small color="primary" @click="openPolicy">Privacy Policy</v-btn>
      </v-card-actions>
    </v-card>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';

export default {
	data: () => ({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
		policy: '',
	}),
	components: {
		ValidationProvider,
		ValidationObserver,
	},
	methods: {
		async clear() {
			this.name = this.email = this.checkbox = '';
			requestAnimationFrame(() => {
				this.$refs.obs.reset();
			});
		},
		async submit() {
			// console.log('name : ', this.name);
			// console.log('email : ', this.email);
			// console.log('checkbox : ', this.checkbox);
			// console.log('submitting!');
			this.$router.push('/signConfirm');
		},
		openPolicy() {
			this.$store.commit('SET_POLICY', true);
		},
	},
};
</script>
