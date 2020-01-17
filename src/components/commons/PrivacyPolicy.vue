<template>
  <v-sheet
    class="d-flex"
    color="grey lighten-5"
    height="600"
    min-width="500"
    align="center"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center" cols="12">
        <h1 class="display-1 font-weight-thin mb-4 grey--text text--darken-3">Privacy Policy</h1>
        <h4 class="subheading grey--text text--darken-3">...</h4>
        <div class="my-2">
            <v-btn text color="primary" large @click="closePolicy">Close</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
	data() {
		return {
			absolute: true,
			overlay: false,
		};
	},
	methods: {
		closePolicy() {
			this.$store.commit('SET_POLICY', false);
		},
	},
};
</script>

<style>
</style>