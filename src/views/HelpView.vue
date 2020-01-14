<template>
  <div class="d-flex flex-column mb-6">
    <google-map-component></google-map-component>
	<contact-component></contact-component>
  </div>
</template>

<script>
import GoogleMapComponent from '../components/GoogleMapComponent';
import ContactComponent from '../components/ContactComponent';

export default {
	name: 'HelpView',
	components: {
		GoogleMapComponent,
		ContactComponent,
	},
};
</script>

<style>
</style>