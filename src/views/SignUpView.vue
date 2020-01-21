<template>
  <div class="d-flex flex-column mb-6">
	<privacy-policy-modal></privacy-policy-modal>
    <sign-up-component></sign-up-component>
  </div>
</template>

<script>
import SignUpComponent from '@/components/SignUpComponent';
import PrivacyPolicyModal from '@/components/modals/PrivacyPolicyModal';

export default {
	name: 'SignUpView',
	components: {
		SignUpComponent,
		PrivacyPolicyModal,
	},
};
</script>
