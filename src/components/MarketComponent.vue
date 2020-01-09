<template>
  <v-layout row wrap>
    <v-flex v-for="item in items" :key="item.id" xs12 sm6 md4 lg3 xl2>
      <market-card>
        <template slot="image">
          <v-img
            :src="`${item.src}`"
            height="200px"
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </template>
        <template slot="title">
          {{ item.title }}
        </template>
        <template slot="subtitle">
          {{ item.subtitle }}
        </template>
        <template slot="button">
          <v-btn text icon color="blue lighten-1">
              <v-icon>mdi-cart</v-icon>
            </v-btn>
        </template>
        <template slot="text">
          {{ item.text }}
        </template>
      </market-card>
    </v-flex>
  </v-layout>
</template>

<script>
import MarketCard from './slots/MarketCard';

export default {
	name: 'MarketComponent',
	components: {
		MarketCard,
	},
	data() {
		return {
			items: this.$store.state.market.items,
		};
	},
};
</script>