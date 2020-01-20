<template>
    <v-layout row wrap>
        <v-flex v-for="item in items" :key="item.id" xs12 sm6 md4 lg3 xl2>
             <v-card
            :color="color"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle v-text="item.subtitle"></v-card-subtitle>
                <v-card-actions>
                    <v-btn text>Listen Now</v-btn>
                </v-card-actions>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
	name: 'CartComponent',
	data() {
		return {
			items: this.$store.state.cart.items,
			color: '#AAAAAA',
		};
	},
};
</script>

<style>
</style>