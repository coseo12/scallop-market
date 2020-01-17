<template>
  <v-parallax
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center" cols="12">
        <h1 class="display-1 font-weight-thin mb-4">Welcome to scallop market</h1>
        <h4 class="subheading">Enjoy your shopping</h4>
        <div class="my-2">
            <v-btn depressed color="primary" large @click="$router.push('/market')">To Market</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
export default {};
</script>

<style>
</style>