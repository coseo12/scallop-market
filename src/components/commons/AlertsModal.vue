<template>
<div id="alerts" class="d-flex flex-column mb-6" >
	<div 
	v-for="item in items" 
	:key="item.id"
	@click="alertClose(item.id)"
	>
		<v-hover>
			<template v-slot="{hover}">
				<v-alert 
				:type="item.type"
				:class="`elevation-${hover ? 6 : 2}`"
				>
				{{ item.msg }}
				</v-alert>
			</template>
		</v-hover>
	</div>
</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'AlertsModal',
	computed: {
		...mapState(['alerts']),
		items: {
			set(items) {
				this.$store.commit('SET_ALERTS_ITEMS', items);
			},
			get() {
				return this.alerts.items;
			},
		},
	},
	methods: {
		alertClose(id) {
			const func = (acc, cur) => {
				if (id !== cur.id) {
					acc.push(cur);
				}
				return acc;
			};
			let items = this.$store.state.alerts.items;
			let alerts = items.reduce(func, []);
			this.$store.commit('SET_ALERTS_ITEMS', alerts);
		},
	},
};
</script>
<style scoped>
#alerts {
	position: sticky;
	bottom: 0;
}
</style>