<template>
    <q-page-container>
        <q-page q-py-md
                q-px-lg
                class="flex flex-center event-page">
            <div class="events-page-container">
                <div class="card-container">
                    <event-card
                        v-for="card in events"
                        :id="card.id"
                        :key="card.id"
                        :title="card.title"
                        :description="card.description"
                        month="Nov"
                        day="4"
                    />
                </div>
            </div>
        </q-page>
    </q-page-container>
</template>

<script>
    import EventCard from '../components/EventCard';
    import { jobsApi } from '../common/http';

    export default {
        data: () => ({
            events: [],
        }),
        components: { EventCard },
        created() {
            this.$q.loading.show({
                message: 'Loading events info',
            });

            jobsApi.get('/event').then(res => {
                this.events = res.data.data;
                this.$q.loading.hide();
                console.log(this.events);
            }).catch(() => {
                this.$q.loading.hide();
                this.$router.push('/404');
            });
        },
    };
</script>

<style scoped lang="scss">
    .card-container {
        width: 100%;
    }

    .event-page {
        background-color: lighten($primary, 50%);
    }

    .events-page-container {
        width: 75%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        @media (max-width: 600px) {
            width: 99%
        }
    }
</style>
