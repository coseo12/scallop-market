<template>
    <v-card
        :class="`elevation-3`"
    >
        <div class="d-flex flex-no-wrap justify-space-between">
            <div>
            <v-card-title class="headline">
                <slot name="title"></slot>
            </v-card-title>

            <v-card-subtitle>
                <slot name="subtitle"></slot>
            </v-card-subtitle>
            <v-card-actions>
                <slot name="actions"></slot>
            </v-card-actions>
            </div>

            <v-avatar
            class="ma-3"
            size="125"
            tile
            >
                <slot name="image"></slot>
            </v-avatar>
        </div>
    </v-card>
</template>

<script>
export default {
	name: 'CartCard',
};
</script>
