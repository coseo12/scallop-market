<template>
  <v-card
    max-width="374"
  >
    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>
        <slot name="title"></slot>
    </v-card-title>

    <v-card-text>
        <slot name="content"></slot>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>
        <slot name="total"></slot>
    </v-card-title>

    <v-card-actions>
        <slot name="actions"></slot>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
</style>