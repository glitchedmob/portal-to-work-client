<template>
    <q-card flat square id="event-card" class="q-ma-md">
        <q-item clickable @click="navigateToEDetail">
            <q-item-section class="card-text">
                <q-item-label class="card-title">{{ title }}</q-item-label>
                <q-item-label caption class="card-description">{{ description }}</q-item-label>
            </q-item-section>
            <q-item-section class="calendar">
                <h5>{{ month }}</h5>
                <h4>{{ day }}</h4>
            </q-item-section>
        </q-item>
    </q-card>
</template>

<script>
    export default {
        props: {
            id: Number,
            title: String,
            description: String,
            month: String,
            day: String
        },
        methods: {
            navigateToEDetail() {
                this.$router.push(`/app/events/${this.id}`);
            }
        },
    }
</script>

<style scoped lang="scss">
    #event-card {
        h1 {
            font-size: 2em;
            margin: 20px;
        }
    }

    .card-text {
        flex-grow: 3;
    }

    .card-title {
        color: $primary;
        font-size: 1.3em;
    }

    .card-description {
        color: $primary;
    }

    .calendar {
        border: 1px solid $primary;
        text-align: center;
        flex-grow: 1;
        height: 75px;
        max-width: 75px;

        h4 {
            margin: 0 10px 0 10px;
            font-size: 1.75em;
        }

        h5 {
            margin: 0 10px 0 10px;
            font-size: 1.2em;
        }
    }
</style>
