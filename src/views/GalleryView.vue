<template>
	<v-container fluid grid-list-md>
		<gallery-component></gallery-component>
	</v-container> 
</template>

<script>
import GalleryComponent from '../components/GalleryComponent';

export default {
	name: 'GalleryView',
	components: {
		GalleryComponent,
	},
};
</script>
