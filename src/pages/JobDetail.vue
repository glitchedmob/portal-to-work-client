<template>
    <q-page-container>
        <q-page class="q-px-md" v-if="job">
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

                <q-item>
                    <q-item-label>Salary</q-item-label>
                    <q-space/>
                    <q-item-label>{{ job.pay_rate }}</q-item-label>
                </q-item>

                <q-item v-if="job.job_type">
                    <q-item-label>Job Type</q-item-label>
                    <q-space/>
                    <q-item-label>{{ jobType }}</q-item-label>
                </q-item>

                <q-item v-if="job.req_education">
                    <q-item-label>Requirements</q-item-label>
                    <q-space/>
                    <q-item-label>{{ educationRequirements }}</q-item-label>
                </q-item>
            </q-list>
            <q-btn
                unelevated
                rounded
                size="lg"
                color="primary"
                class="q-pt-sm my-btn-center"
                label="APPLY NOW"
                type="a"
                target="_blank"
                :href="job.url"
            />

            <google-map v-if="locations.length" :pins="locations"/>

            <div class="row q-py-md">
                <q-icon
                    class="col"
                    name="directions_walk"
                    color="primary"
                    size="26px"
                />
                <q-icon
                    class="col"
                    name="directions_bike"
                    color="primary"
                    size="26px"
                />
                <q-icon
                    class="col"
                    name="directions_bus"
                    color="primary"
                    size="26px"
                />
                <q-icon
                    class="col"
                    name="directions_car"
                    color="primary"
                    size="26px"
                />
            </div>
            <div class="row q-px-lg">
                <p class="col">{{ drivingTime }}</p>
                <p class="col">{{ walkingTime }}</p>
                <p class="col">{{ transitTime }}</p>
                <p class="col">{{ bikingTime }}</p>
            </div>

            <q-card flat class="address-section text-primary">
                <q-card-section>
                    <q-btn
                        unelevated
                        rounded
                        class="q-px-xl q-py-sm"
                        size="lg"
                        color="primary"
                        label="Map"
                        type="a"
                        :href="getDirections"
                        target="_blank"
                    />
                </q-card-section>
                <q-card-section class="q-py-none">
                    <q-item-label>{{ job.locations.data[0].street }}</q-item-label>
                    <q-item-label caption>{{ job.locations.data[0].city }}, {{ job.locations.data[0].state }} {{
                        job.locations.data[0].zipcode }}
                    </q-item-label>
                </q-card-section>
            </q-card>
        </q-page>
    </q-page-container>
</template>

<script>

    import { jobsApi } from '../common/http';
    import GoogleMap from "../components/GoogleMap";
    import { mapState }  from 'vuex';
    import { googleMaps } from "../common/google-maps";
    import jobTypes from '../common/job-types';
    import educationLevels from '../common/education-levels';


    export default {
        components: {
            GoogleMap,
        },
        data: () => ({
            job: null,
            drivingTime: null,
            walkingTime: null,
            transitTime: null,
            bikingTime: null,
        }),
        computed: {
            ...mapState(['coordinates']),
            educationRequirements() {
                return educationLevels
                    .filter(level => level.value === this.job.req_education)
                    .map(level => level.label)[0];
            },
            jobType() {
                return jobTypes
                    .filter(type => type.value === this.job.job_type)
                    .map(type => type.label)[0];
            },
            locations() {
                if (this.job == null) return [];

                return this.job.locations.data
                    .map(location => ({
                        lat: parseFloat(location.lat),
                        lng: parseFloat(location.lng),
                    }))
                    .filter(location => location.lng && location.lat);
            },
            getDirections() {
                let base = 'https://www.google.com/maps/dir/?api=1&destination=';
                let next = '';

                if (this.job.locations.data[0].lat !== null && this.job.locations.data[0].lng !== null) {
                    next = encodeURIComponent(this.job.locations.data[0].lat) + "," +
                        encodeURIComponent(" " + this.job.locations.data[0].lng);
                } else {
                    next = encodeURIComponent(this.job.locations.data[0].street + " ") +
                        encodeURIComponent(this.job.locations.data[0].city) + "," +
                            encodeURIComponent(" " + this.job.locations.data[0].state + " ") +
                                encodeURIComponent(this.job.locations.data[0].zipcode);
                }
                return base + next;
            },
        },
        methods: {

            async getTravelTimeFor(mode, dataName) {
                if(!this.locations) return;
                const google = await googleMaps();

                let directionsService = new google.maps.DirectionsService();
                let request = {
                    origin: new google.maps.LatLng(
                        parseFloat(this.coordinates.latitude),
                        parseFloat(this.coordinates.longitude),
                    ),
                    destination: new google.maps.LatLng(
                        this.locations[0].lat,
                        this.locations[0].lng,
                    ),
                    travelMode: mode,
                };
                directionsService.route(request, (result, status) => {
                    console.log(mode);
                    console.log(result);
                    this[dataName] = result.routes[0].legs[0].duration.text;
                });
            }
        },
        created() {
            this.$q.loading.show({
                message: 'Loading job info',
            });
            const {id} = this.$route.params;

            if (!id) {
                this.$router.push('/404');
                this.$q.loading.hide();
                return;
            }

            jobsApi.get(`/job/${id}`).then(res => {
                this.job = res.data.data;
                this.getTravelTimeFor('DRIVING', 'drivingTime');
                this.getTravelTimeFor('BICYCLING', 'bikingTime');
                this.getTravelTimeFor('TRANSIT', 'transitTime');
                this.getTravelTimeFor('WALKING', 'walkingTime');
                this.$q.loading.hide();
            }).catch((err) => {
                console.log(err);
                this.$q.loading.hide();
                // this.$router.push('/404');
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

    .map {
        height: 200px;
    }
</style>
