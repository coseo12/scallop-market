<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex v-for="n in 4" :key="n" xs12 sm6 md4 lg3 xl2>
        <v-hover>
        <template v-slot="{ hover }">
        <v-card
          class="mx-auto pa-6 transition-swing"
          max-width="400"
          :class="`elevation-${hover ? 24 : 6}`"
        >
          <v-img
            class="white--text align-end"
            height="200px"
            :src="`https://picsum.photos/200/300?image=${n * 5 + 10}`"
            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
          >
            <v-card-title>
              <v-btn
                icon
                large
              >
                <v-avatar color="#B3E5FC" size="38">
                  <v-icon dark>mdi-lightbulb-on-outline</v-icon>
                </v-avatar>
              </v-btn>
            </v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

          <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>

          <v-card-actions>
            <v-btn
              color="#1E88E5"
            >
              <v-icon dark>mdi-cart-outline</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
        </template>
        </v-hover>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>