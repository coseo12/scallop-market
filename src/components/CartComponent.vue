<template>
  <v-layout row wrap>
    <div class="cart-list">
      <v-row dense>
        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
        >
          <cart-card>
            <template slot="title">
              {{ item.title }}
            </template>
            <template slot="subtitle">
              {{ item.subtitle }}
            </template>
            <template slot="actions">
              <v-btn text>DELETE</v-btn>
            </template>
            <template slot="image">
              <v-img :src="item.src"></v-img>
            </template>
          </cart-card>
        </v-col>
      </v-row>
    </div>
    <div class="buy">
      <buy-card>
        <template slot="title">
          Expected payment amount
        </template>
        <template slot="content">
          title1 : 2000 ￦<br>
          title2 : 8000 ￦
        </template>
        <template slot="total">
          Total: 10,000￦
        </template>
        <template slot="actions">
          <v-btn
            color="deep-purple accent-4"
            text
          >
            PAYMENT
          </v-btn>
        </template>
      </buy-card>
    </div>
  </v-layout>
</template>

<script>
import CartCard from './slots/CartCard';
import BuyCard from './slots/BuyCard';

export default {
	name: 'CartComponent',
	components: {
		CartCard,
		BuyCard,
	},
	data() {
		return {
			items: this.$store.state.cart.items,
		};
	},
};
</script>

<style scoped>
.cart-list {
	flex: 50%;
	padding: 0px 5px 0px 5px;
}
.buy {
	flex: 50%;
	padding: 5px 5px 0px 5px;
}
</style>