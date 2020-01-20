<template>
  <div class="d-flex flex-column mb-6">
    <cart-component></cart-component>
  </div>
</template>

<script>
import CartComponent from '@/components/CartComponent';

export default {
	name: 'CartView',
	components: {
		CartComponent,
	},
};
</script>

<style>
</style>