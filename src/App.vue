<template>
  <v-app id="app">
    <navigation-component></navigation-component> 
    <app-bar-component></app-bar-component>
    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
        <floating-actions-admin-buttons></floating-actions-admin-buttons>
        <floating-actions-scroll-buttons></floating-actions-scroll-buttons>
        <alerts-modal></alerts-modal>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import NavigationComponent from './components/commons/NavigationComponent';
import AppBarComponent from './components/commons/AppBarComponent';
import AlertsModal from './components/modals/AlertsModal';
import FloatingActionsAdminButtons from './components/commons/FloatingActionsAdminButtons';
import FloatingActionsScrollButtons from './components/commons/FloatingActionsScrollButtons';

export default {
	name: 'App',
	components: {
		NavigationComponent,
		AppBarComponent,
		AlertsModal,
		FloatingActionsAdminButtons,
		FloatingActionsScrollButtons,
	},
	data() {
		return {};
	},
};
</script>
