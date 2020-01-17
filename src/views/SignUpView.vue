<template>
  <div class="d-flex flex-column mb-6">
	<v-overlay
		:absolute="absolute"
		:value="setOverlay"
	>
	<privacy-policy></privacy-policy>
	</v-overlay>
    <sign-up-component></sign-up-component>
  </div>
</template>

<script>
import SignUpComponent from '@/components/SignUpComponent';
import PrivacyPolicy from '@/components/commons/PrivacyPolicy';

export default {
	name: 'SignUpView',
	components: {
		SignUpComponent,
		PrivacyPolicy,
	},
	data() {
		return {
			absolute: true,
		};
	},
	computed: {
		setOverlay() {
			return this.$store.state.policy;
		},
	},
};
</script>
