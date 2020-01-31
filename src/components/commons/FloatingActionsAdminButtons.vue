<template>
  <div id="fab" v-if="auth">
    <v-card id="create">
      <v-speed-dial
        v-model="fab"
        :top="top"
        :bottom="bottom"
        :right="right"
        :left="left"
        :direction="direction"
        :open-on-hover="hover"
        :transition="transition"
      > 
        <template v-slot:activator>
          <v-btn
            v-model="fab"
            color="red darken-2"
            dark
            small
            fab
          >
            <v-icon v-if="fab">mdi-close</v-icon>
            <v-icon v-else>mdi-plus</v-icon>
          </v-btn>
        </template>
        <v-tooltip left>
          <template v-slot:activator="{ on }">
          <v-btn
            v-on="on"
            fab
            dark
            small
            color="teal accent-4"
          >
            <v-icon>mdi-note-plus</v-icon>
          </v-btn>
        </template>
          <span>New Product</span>
        </v-tooltip>
      </v-speed-dial>
    </v-card>
  </div>
</template>

<script>
export default {
	data: () => ({
		direction: 'top',
		fab: false,
		fling: false,
		hover: false,
		tabs: null,
		top: false,
		right: true,
		bottom: true,
		left: false,
		transition: 'slide-y-reverse-transition',
		// auth: true,
		topBtn: false,
	}),
	computed: {
		auth() {
			let flag = true;
			const keys = [
				'signUp',
				'signIn',
				'about',
				'management',
				'help',
				'cart',
				'myPage',
			];
			for (let key of keys) {
				if (this.$route.name === key) {
					flag = false;
					break;
				}
			}
			return flag;
		},
	},
	watch: {
		top(val) {
			this.bottom = !val;
		},
		right(val) {
			this.left = !val;
		},
		bottom(val) {
			this.top = !val;
		},
		left(val) {
			this.right = !val;
		},
	},
};
</script>

<style scoped>
/* This is for documentation purposes and will not be needed in your application */
#fab {
	position: sticky;
	bottom: 130px;
}

#create .v-speed-dial {
	position: absolute;
}

#create .v-btn--floating {
	position: relative;
}
</style>