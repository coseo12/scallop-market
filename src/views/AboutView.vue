<template>
  <div class="d-flex flex-column mb-6">
    <about-carousels-component></about-carousels-component>
    <about-timeline-component></about-timeline-component>
  </div>
</template>

<script>
import AboutCarouselsComponent from '@/components/AboutCarouselsComponent';
import AboutTimelineComponent from '@/components/AboutTimelineComponent';

export default {
	name: 'AboutView',
	components: {
		AboutCarouselsComponent,
		AboutTimelineComponent,
	},
};
</script>

<style>
</style>