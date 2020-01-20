<template>
  <v-card class="elevation-4">
      <v-toolbar 
      dark
      prominent
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      >
			<v-toolbar-title>Sign In</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form>
            <v-text-field
                v-model="email"
                label="E-mail"
                required
            ></v-text-field>
            <v-text-field
                type="password"
                v-model="password"
                label="Password"
                required
            ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn large color="primary" @click="submit">Sign In</v-btn>
        <v-spacer></v-spacer>
        <v-btn text large color="primary" @click="$router.push('signUp')">Sign Up</v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
export default {
	name: 'SignInComponent',
	data() {
		return {
			email: '',
			password: '',
		};
	},
	methods: {
		submit() {
			alert(1);
		},
	},
};
</script>

<style>
</style>