<template>
  <v-card>
	<v-snackbar
	v-model="snack"
	:bottom="y === 'bottom'"
	:color="snack.color"
	:left="x === 'left'"
	:multi-line="mode === 'multi-line'"
	:right="x === 'right'"
	:timeout="timeout"
	:top="y === 'top'"
	:vertical="mode === 'vertical'"
	>
	{{ snack.msg }}
	<v-btn
		dark
		text
		@click="snack = false"
	>
		Close
	</v-btn>
	</v-snackbar>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'SnackBar',
	data() {
		return {
			mode: 'vertical',
			snackbar: true,
			timeout: 5000,
			x: 'right',
			y: 'bottom',
		};
	},
	computed: {
		...mapState(['alerts']),
		snack: {
			set(items) {
				this.$store.commit('SET_ALERTS_SNACK', items);
			},
			get() {
				return this.alerts.snack;
			},
		},
	},
};
</script>