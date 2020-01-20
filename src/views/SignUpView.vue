<template>
  <div class="d-flex flex-column mb-6">
	<privacy-policy></privacy-policy>
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
};
</script>
