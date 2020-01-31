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
        <type-alerts-modal></type-alerts-modal>
        <snack-bar></snack-bar>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import NavigationComponent from './components/commons/NavigationComponent';
import AppBarComponent from './components/commons/AppBarComponent';
import FloatingActionsAdminButtons from './components/commons/FloatingActionsAdminButtons';
import FloatingActionsScrollButtons from './components/commons/FloatingActionsScrollButtons';
import TypeAlertsModal from './components/modals/TypeAlertsModal';
import SnackBar from './components/modals/SnackBar';

export default {
	name: 'App',
	components: {
		NavigationComponent,
		AppBarComponent,
		FloatingActionsAdminButtons,
		FloatingActionsScrollButtons,
		TypeAlertsModal,
		SnackBar,
	},
};
</script>
