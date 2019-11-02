<template>
    <q-page-container>
        <q-page class="q-pa-lg" v-if="job">
            <p class="text-h5 text-weight-medium">{{ job.title }}</p>
            <p class="text-subtitle1">{{ job.employer.name }}</p>


            <q-list bordered class="rounded-borders text-primary">
                <q-expansion-item
                    expand-separator
                    label="Job Description"
                >
                    <q-card>
                        <q-card-section>
                            <div v-html="job.description"></div>
                        </q-card-section>
                    </q-card>
                </q-expansion-item>

                <q-item class="">
                        <q-item-label>Salary</q-item-label>
                    <q-space/>
                        <q-item-label>{{ job.pay_rate }}</q-item-label>
                </q-item>

                <q-item class="">
                    <q-item-label>Job Type</q-item-label>
                    <q-space/>
                    <q-item-label>{{ jobType }}</q-item-label>
                </q-item>

                <q-item class="">
                    <q-item-label>Salary</q-item-label>
                    <q-space/>
                    <q-item-label>{{ educationRequirements }}</q-item-label>
                </q-item>
            </q-list>
            <q-btn
                unelevated
                rounded
                size="lg"
                color="primary"
                class="my-btn-center"
                label="APPLY NOW"
                type="a"
                target="_blank"
                :href="job.url"
            />

            <q-card flat class="address-section text-primary">
                <q-card-section>
                    <q-btn
                        unelevated
                        rounded
                        size="lg"
                        color="primary"
                        label="Map"
                    />
                </q-card-section>
                <q-card-section class="q-py-none">
                    <q-item-label>{{ job.locations.data[0].street }}</q-item-label>
                    <q-item-label caption>{{ job.locations.data[0].city }}, {{ job.locations.data[0].state }} {{ job.locations.data[0].zipcode }}</q-item-label>
                </q-card-section>
            </q-card>
        </q-page>
    </q-page-container>
</template>

<script>
    import http from '../common/http';

    export default {
        data: () => ({
            job: null,
        }),
        computed: {
            educationRequirements() {
                if (this.job.req_education === 'high_school') {
                    return 'High School or Equiv';
                }
                return this.job.req_education;
            },

            jobType() {
                if (this.job.job_type === 'full_time') {
                    return 'Full Time';
                }
                return this.job.job_type;
            },
        },
        created() {
            this.$q.loading.show({
                message: 'Loading job info',
            });
            const { id } = this.$route.params;

            if(!id) {
                this.$router.push('/404');
                this.$q.loading.hide();
                return;
            }

            http.get(`${process.env.JOBS_API_URL}/job/${id}`).then(res => {
                this.job = res.data.data;
                this.$q.loading.hide();
            }).catch(() => {
                this.$q.loading.hide();
                this.$router.push('/404');
            });
        },
    };
</script>

<style scoped lang="scss">
    .col p {
        font-size: 20px;
    }

    .my-btn-center {
        display: block;
        margin: 20px auto;
    }

    .address-section {
        display: flex;
        align-items: center;
    }
</style>
