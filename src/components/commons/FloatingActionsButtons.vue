<template>
  <div id="fab">
    <v-card id="create" v-if="!auth">
      <v-speed-dial
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
            v-scroll="onScroll"
            v-show="topBtn"
            @click="onTop"
            class="topBtn"
            color="blue darken-2"
            dark
            fab
          >
            <v-icon>mdi-chevron-up</v-icon>
          </v-btn>
        </template>
      </v-speed-dial>
    </v-card>
    <v-card id="create" v-else>
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
            color="red darken-4"
            dark
            fab
          >
            <v-icon v-if="fab">mdi-close</v-icon>
            <v-icon v-else>mdi-plus</v-icon>
          </v-btn>
        </template>
        <v-btn
          v-scroll="onScroll"
          @click="onTop"
          fab
          dark
          small
          color="blue darken-2"
        >
          <v-icon>mdi-chevron-up</v-icon>
        </v-btn>
        <v-btn
          fab
          dark
          small
          color="green"
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn
          fab
          dark
          small
          color="indigo"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-btn
          fab
          dark
          small
          color="red"
        >
          <v-icon>mdi-delete</v-icon>
        </v-btn>
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
		auth: false,
		topBtn: false,
	}),

	computed: {
		activeFab() {
			switch (this.tabs) {
				case 'one':
					return { class: 'purple', icon: 'account_circle' };
				case 'two':
					return { class: 'red', icon: 'edit' };
				case 'three':
					return { class: 'green', icon: 'keyboard_arrow_up' };
				default:
					return {};
			}
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
	methods: {
		onScroll(e) {
			if (typeof window === 'undefined') return;
			const top = window.pageYOffset || e.target.scrollTop || 0;
			this.topBtn = top > 20;
		},
		onTop() {
			this.$vuetify.goTo(0);
		},
	},
};
</script>

<style scoped>
/* This is for documentation purposes and will not be needed in your application */
#fab {
	position: sticky;
	bottom: 0;
}

#create .v-speed-dial {
	position: absolute;
}

#create .v-btn--floating {
	position: relative;
}
</style>