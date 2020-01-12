<template>
  <v-app id="app">
    <navigation-component></navigation-component> 
    <app-bar-component></app-bar-component>
    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
        <floating-actions-buttons></floating-actions-buttons>
        <alerts-modal></alerts-modal>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import NavigationComponent from './components/commons/NavigationComponent';
import AppBarComponent from './components/commons/AppBarComponent';
import AlertsModal from './components/commons/AlertsModal';
import FloatingActionsButtons from './components/commons/FloatingActionsButtons';

export default {
	name: 'App',
	components: {
		NavigationComponent,
		AppBarComponent,
		AlertsModal,
		FloatingActionsButtons,
	},
	data() {
		return {};
	},
};
</script>