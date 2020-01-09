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
    <v-btn icon>
      <v-badge
        :content="cart"
        :value="cart"
        color="red"
        overlap
      >
        <v-icon>mdi-cart</v-icon>
      </v-badge>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-login</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-logout</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-clipboard-account-outline</v-icon>
    </v-btn>
    <v-btn
      icon
      large
    >
      <v-avatar
        size="32px"
        item
      >
        <v-icon dark>mdi-account-circle</v-icon>
        <!-- <v-img
          src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
          alt="Vuetify"
        /> -->
      </v-avatar>
    </v-btn>
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
				this.$store.commit('SET_DRAWER', drawer);
			},
			get() {
				return this.navigation_drawers.drawer;
			},
		},
	},
};
</script>

<style>
</style>