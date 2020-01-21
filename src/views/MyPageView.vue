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
            Delivery
          </div>
        </v-container>
        <v-container fluid v-else>
          <div class="d-flex flex-column mb-6">
            MyInfo 
          </div>
        </v-container>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
export default {
	name: 'MyPageView',
};
</script>

<style>
</style>