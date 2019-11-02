<template>
    <q-card flat square id="event-card" class="q-ma-md">
        <q-item clickable>
            <q-item-section class="card-text">
                <q-item-label class="card-title">Event Name or Title</q-item-label>
                <q-item-label caption class="card-employer">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</q-item-label>
            </q-item-section>
            <q-item-section class="calendar">
                <h5>Nov</h5>
                <h4>4</h4>
            </q-item-section>
        </q-item>
    </q-card>
</template>

<script>
    export default {
        name: "EventCard"
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
        font-size: 2em;

        @media (max-width: 500px) {
            font-size: 1.5em;
        }
    }
    .card-employer {
        font-size: 1.5em;

        @media (max-width: 500px) {
            font-size: 1em;
        }
    }
    .calendar {
        border: 1px solid $primary;
        text-align: center;
        flex-grow: 1;
        min-height: 80px;
        max-width: 90px;

        h4 {
            margin: 0 10px 0 10px;
        }

        h5 {
            margin: 0 10px 0 10px;
        }
    }
</style>
