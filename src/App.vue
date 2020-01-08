<template>
  <v-app id="inspire">
    <navigation-component></navigation-component> 
    <app-bar-component></app-bar-component>
    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import NavigationComponent from '@/components/NavigationComponent';
import AppBarComponent from '@/components/AppBarComponent';

export default {
	name: 'App',
	components: {
		NavigationComponent,
		AppBarComponent,
	},
	data() {
		return {};
	},
};
</script>
