<template>
  <div class="d-flex flex-column mb-6">
    <v-card
      v-for="n in 3"
      :key="n"
      class="pa-2"
      outlined
      tile
    >
      Flex item {{ n }}
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>