<template>
  <v-card>
    <v-tabs
      background-color="white"
      color="indigo accent-4"
    >
      <v-tab>Order List</v-tab>
      <v-tab>Market Info</v-tab>

      <v-tab-item
        v-for="n in 2"
        :key="n"
      >
        <v-container fluid v-if="n === 1">
          <div class="d-flex flex-column mb-6">
            <order-list-component></order-list-component>
          </div>
        </v-container>
        <v-container fluid v-else>
          <div class="d-flex flex-column mb-6">
            <market-info-component></market-info-component>
          </div>
        </v-container>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
import OrderListComponent from '../components/OrderListComponent';
import MarketInfoComponent from '../components/MarketInfoComponent';

export default {
	name: 'ManagementView',
	components: {
		OrderListComponent,
		MarketInfoComponent,
	},
};
</script>

<style>
</style>