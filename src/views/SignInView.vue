<template>
  <div class="d-flex flex-column mb-6">
    <sign-in-component></sign-in-component>
  </div>
</template>

<script>
import SignInComponent from '@/components/SignInComponent';

export default {
	name: 'SignInView',
	components: {
		SignInComponent,
	},
};
</script>

<style>
</style>