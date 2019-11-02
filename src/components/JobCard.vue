<template>
    <q-card flat square class="listing-card q-py-sm">
        <q-item clickable @click="navigateToDetail">
            <q-item-section avatar v-if="mainIcon">
                <q-icon :name="mainIcon" size="lg" class="icon"></q-icon>
            </q-item-section>
            <q-item-section class="text-left">
                <q-item-label class="card-title">{{ title }}</q-item-label>
                <q-item-label caption class="card-subtitle">{{ subTitle }}</q-item-label>
            </q-item-section>
            <q-item-section avatar>
                <div class="row justify-end items-center q-col-gutter-md">
                    <div class="icon" v-if="walkingDistance">
                        <q-icon name="directions_walk" size="sm"></q-icon>
                        <p>{{ walkingDistance }}</p>
                    </div>
                    <div class="icon" v-if="busingDistance">
                        <q-icon name="directions_bus" size="sm"></q-icon>
                        <p>{{ busingDistance }}</p>
                    </div>
                    <div class="icon" v-if="bikingDistance">
                        <q-icon name="directions_bike" size="sm"></q-icon>
                        <p>{{ bikingDistance }}</p>
                    </div>
                    <div class="icon" v-if="drivingDistance">
                        <q-icon name="directions_car" size="sm"></q-icon>
                        <p>{{ drivingDistance }}</p>
                    </div>
                </div>
            </q-item-section>
        </q-item>
    </q-card>
</template>

<script>
    export default {
        props: {
            id: String,
            mainIcon: String,
            title: String,
            subTitle: String,
            walkingTime: String,
            busTime: String,
            walkingDistance: String,
            bikingDistance: String,
            busingDistance: String,
            drivingDistance: String,
        },
        methods: {
            navigateToDetail() {
                this.$router.push(`/app/jobs/${this.id}`);
            }
        }
    }
</script>

<style scoped lang="scss">
    .listing-card {
        margin: 15px 0;
        background-color: lighten($primary, 50%);
    }

    .card-title {
        color: $primary;
        font-size: 1.3em;
    }

    .card-subtitle {
        color: $primary;
        font-size: 1.2em;
    }


    .icon {
        color: $primary;
        p {
            margin: 0;
        }
    }
</style>
