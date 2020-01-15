<template>
  <v-app-bar
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    app
    color="blue darken-3"
    dark
  >
  <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    <v-toolbar-title
      style="width: 300px"
      class="ml-0 pl-4"
    >
      <span class="hidden-sm-and-down">Scallop Market</span>
    </v-toolbar-title>
    <v-text-field
      flat
      solo-inverted
      hide-details
      prepend-inner-icon="mdi-magnify"
      label="Search"
      class="d-none hidden-sm-and-down"
    />
    <v-spacer />
    <v-btn icon @click="ToPage('cart')">
      <v-badge
        :content="cart"
        :value="cart"
        color="red"
        overlap
      >
        <v-icon>mdi-cart</v-icon>
      </v-badge>
    </v-btn>
     <v-menu transition="slide-y-transition">
      <template v-slot:activator="{ on }">
        <v-btn
          icon
          large
          class="ma-2"
          v-on="on"
        >
          <v-avatar
            size="32px"
            item
          >
            <v-icon dark>mdi-account-circle</v-icon>
          </v-avatar>
        </v-btn>
      </template>
      <v-list :min-width="100">
        <v-list-item link @click="ToPage('signIn')">
          <v-list-item-title>
            <v-icon>mdi-login</v-icon> Sign In
          </v-list-item-title>
        </v-list-item>
        <v-list-item link @click="ToPage('myPage')">
          <v-list-item-title>
            <v-icon>mdi-account-circle-outline</v-icon> My Page
          </v-list-item-title>
        </v-list-item>
        <v-list-item link @click="ToSignOut()">
          <v-list-item-title>
            <v-icon>mdi-logout</v-icon> Sign Out
          </v-list-item-title>
        </v-list-item>
        <v-list-item link @click="ToPage('signUp')">
          <v-list-item-title>
            <v-icon>mdi-clipboard-account-outline</v-icon> Sign Up
          </v-list-item-title>
        </v-list-item>
      </v-list>
     </v-menu>
  </v-app-bar>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'AppBarComponent',
	data() {
		return {
			cart: 2,
		};
	},
	computed: {
		...mapState(['navigation_drawers']),
		drawer: {
			set(drawer) {
				this.$store.commit('SET_NAVIGATION_DRAWER', drawer);
			},
			get() {
				return this.navigation_drawers.drawer;
			},
		},
	},
	methods: {
		ToPage(name) {
			this.$router.push(name);
		},
		ToSignOut() {
			alert('Sign Out!');
		},
	},
};
</script>

<style>
</style>