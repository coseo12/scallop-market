<template>
  <v-card>
    <v-tabs
      background-color="white"
      color="indigo accent-4"
    >
      <v-tab>Order</v-tab>
      <v-tab>Confirm</v-tab>

      <v-tab-item
        v-for="n in 2"
        :key="n"
      >
        <v-container fluid v-if="n === 1">
          <div class="d-flex flex-column mb-6">
            Order
          </div>
        </v-container>
        <v-container fluid v-else>
          <div class="d-flex flex-column mb-6">
            Confirm 
          </div>
        </v-container>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
</style>