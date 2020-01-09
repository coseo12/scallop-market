<template>
  <v-layout row wrap>
			<v-flex v-for="item in items" :key="item.id" xs12 sm6 md4 lg3 xl2>
        <gallery-card>
          <template slot="avatar">
            <v-btn icon>
              <v-icon>mdi-account</v-icon>
            </v-btn>
          </template>
          <template slot="headline">
              {{ item.headline }}
          </template>
          <template slot="subtitle">
              {{ item.subtitle }}
          </template>
          <template slot="image">
            <v-img
            :src="`${item.src}`"
            height="194"
            aspect-ratio="1"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </template>
          <template slot="text">
              {{ item.text }}
          </template>
          <template slot="left_btn"></template>
          <template slot="right_btn"></template>
        </gallery-card>
			</v-flex>
  </v-layout>
</template>

<script>
import GalleryCard from './slots/GalleryCard';

export default {
	name: 'GalleryComponents',
	components: {
		GalleryCard,
	},
	data() {
		return {
			items: this.$store.state.work_gallery.items,
		};
	},
};
</script>

<style>
</style>