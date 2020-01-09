<template>
	<v-container fluid grid-list-md>
		<market-component></market-component>
	</v-container>
</template>

<script>
import MarketComponent from '../components/MarketComponent';

export default {
	name: 'MarketView',
	components: {
		MarketComponent,
	},
};
</script>