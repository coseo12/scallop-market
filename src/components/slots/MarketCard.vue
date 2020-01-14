<template>
    <v-hover>
        <template v-slot="{hover}">
            <v-card
                class="mx-auto"
                max-width="344"
                :class="`elevation-${hover ? 6 : 2}`"
            >

                <slot name="image"></slot>

                <v-card-title>
                    <slot name="title"></slot>
                </v-card-title>

                <v-card-subtitle>
                    <slot name="subtitle"></slot>
                </v-card-subtitle>

                <v-card-actions>
                    <slot name="button"></slot>
                        
                    <v-spacer></v-spacer>

                    <v-btn
                        icon
                        @click="show = !show"
                    >
                        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                </v-card-actions>

            <v-expand-transition>
                <div v-show="show">
                    <v-divider></v-divider>

                    <v-card-text>
                        <slot name="text"></slot>
                    </v-card-text>
                </div>
            </v-expand-transition>
        </v-card>
    </template>
    </v-hover>
</template>

<script>
export default {
	name: 'MarketCard',
	data() {
		return { show: false };
	},
};
</script>
