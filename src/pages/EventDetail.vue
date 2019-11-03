<template>
    <q-page-container>
        <q-page class="q-pa-lg" v-if=event>
            <p class="text-h5 text-weight-medium">{{ event.title }}</p>
            <p class="text-subtitle1">{{  }}</p>

            <q-item-section class="calendar">
                <h5>{{ event.date_begin }}</h5>
                <h4>{{ day }}</h4>
            </q-item-section>

            <q-list bordered class="rounded-borders text-primary">
                <q-expansion-item
                    expand-separator
                    label="Event Description"
                >
                    <q-card>
                        <q-card-section>
                            <div v-html="event.description"></div>
                        </q-card-section>
                    </q-card>
                </q-expansion-item>

                <q-item>
                    <q-item-label>Date</q-item-label>
                    <q-space/>
                    <q-item-label>{{ event.date_begin }}</q-item-label>
                </q-item>

                <q-item>
                    <q-item-label>Time</q-item-label>
                    <q-space/>
                    <q-item-label>{{ event.date_begin }}</q-item-label>
                </q-item>

                <q-item>
                    <q-item-label>Cost</q-item-label>
                    <q-space/>
                    <q-item-label>{{ event.cost }}</q-item-label>
                </q-item>
            </q-list>
        </q-page>
    </q-page-container>
</template>

<script>
    import http from '../common/http';

    export default {
        data: () => ({
            event: null,
        }),
        created() {
            this.$q.loading.show({
                message: 'Loading event info',
            });
            const { id } = this.$route.params;

            if(!id) {
                this.$router.push('/404');
                this.$q.loading.hide();
                return;
            }

            http.get(`${process.env.JOBS_API_URL}/event/${id}`).then(res => {
                this.event = res.data.data;
                this.$q.loading.hide();
                console.log(this.event);
            }).catch(() => {
                this.$q.loading.hide();
                this.$router.push('/404');
            });
        },
    }
</script>

<style scoped lang="scss">
    .calendar {
        border: 1px solid $primary;
        text-align: center;
        flex-grow: 1;
        height: 75px;
        max-width: 75px;
    }
</style>
