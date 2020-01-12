<template>
    <v-hover>
        <template v-slot="{hover}">
            <v-card
                max-width="344"
                class="mx-auto"
                :class="`elevation-${hover ? 6 : 2}`"
            >
                <v-list-item>
                <v-list-item-avatar color="blue lighten-1">
                    <slot name="avatar"></slot>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title class="headline">
                        <slot name="headline"></slot>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        <slot name="subtitle"></slot>
                    </v-list-item-subtitle>
                </v-list-item-content>
                </v-list-item>
                    <slot name="image"></slot>
                <v-card-text>
                    <slot name="text"></slot>
                </v-card-text>

                <v-card-actions>
                    <slot name="left_btn"></slot>
                <v-spacer></v-spacer>
                    <slot name="right_btn"></slot>
                </v-card-actions>
            </v-card>
        </template>
    </v-hover>
</template>
