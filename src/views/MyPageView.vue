<template>
  <v-card>
    <v-tabs
      background-color="white"
      color="indigo accent-4"
    >
      <v-tab>Delivery</v-tab>
      <v-tab>MyInfo</v-tab>

      <v-tab-item
        v-for="n in 2"
        :key="n"
      >
        <v-container fluid v-if="n === 1">
          <div class="d-flex flex-column mb-6">
            <delivery-component></delivery-component>
          </div>
        </v-container>
        <v-container fluid v-else>
          <div class="d-flex flex-column mb-6">
            <my-info-component></my-info-component>
          </div>
        </v-container>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
import DeliveryComponent from '../components/DeliveryComponent';
import MyInfoComponent from '../components/MyInfoComponent';

export default {
	name: 'MyPageView',
	components: {
		DeliveryComponent,
		MyInfoComponent,
	},
};
</script>

<style>
</style>