<template>
    <div>
        <q-banner class="bg-grey-3">
            <p class="text-weight-medium text-uppercase">Position</p>
        </q-banner>
        <div>
            <q-select :options="educationLevelOptions" v-model="selectedEducationLevel" label="Education Level"/>
            <q-select :options="jobTypeOptions" v-model="selectedJobType" label="Job Types"/>
        </div>
        <q-banner class="bg-grey-3">
            <p class="text-weight-medium text-uppercase">Travel</p>
        </q-banner>
        <q-select :options="travelTimeOptions" v-model="selectedTravelTime" label="Maximum Travel Time"/>
        <q-list>
            <q-item tag="label" v-ripple>
                <q-item-section>
                    <q-item-label style="color: #027BE3">
                        Show Walking Distance
                    </q-item-label>
                </q-item-section>
                <q-item-section avatar>
                    <div class="row items-center">
                        <q-icon color="primary" name="directions_walk" size="sm"/>
                        <q-toggle color="blue" v-model="showWalkingDistance"/>
                    </div>
                </q-item-section>
            </q-item>
            <q-item tag="label" v-ripple>
                <q-item-section>
                    <q-item-label style="color: #027BE3">
                        Show Biking Distance
                    </q-item-label>
                </q-item-section>
                <q-item-section avatar>
                    <div class="row items-center">
                        <q-icon color="primary" name="directions_walk" size="sm"/>
                        <q-toggle color="blue" v-model="showBikingDistance"/>
                    </div>
                </q-item-section>
            </q-item>
            <q-item tag="label" v-ripple>
                <q-item-section>
                    <q-item-label style="color: #027BE3">
                        Show Busing Distance
                    </q-item-label>
                </q-item-section>
                <q-item-section avatar>
                    <div class="row items-center">
                        <q-icon color="primary" name="directions_walk" size="sm"/>
                        <q-toggle color="blue" v-model="showBusingDistance"/>
                    </div>
                </q-item-section>
            </q-item>
            <q-item tag="label" v-ripple>
                <q-item-section>
                    <q-item-label style="color: #027BE3">
                        Show Driving Distance
                    </q-item-label>
                </q-item-section>
                <q-item-section avatar>
                    <div class="row items-center">
                        <q-icon color="primary" name="directions_walk" size="sm"/>
                        <q-toggle color="blue" v-model="showDrivingDistance"/>
                    </div>
                </q-item-section>
            </q-item>
        </q-list>
    </div>
</template>

<script>
    import JobCard from "../components/JobCard";

    export default {
        name: "JobsFilter.vue",
        components: {JobCard},
        data: () => ({
            showWalkingDistance: false,
            showBikingDistance: false,
            showBusingDistance: false,
            showDrivingDistance: false,
            selectedTravelTime: null,
            travelTimeOptions: [
                '10min',
                '20min',
                '30min',
                '60min',
            ],
            selectedEducationLevel: null,
            educationLevelOptions: [
                'High School or Equiv',
            ],
            selectedJobType: null,
            jobTypeOptions: [
                'All',
            ],
        }),
    };
</script>

<style scoped>

</style>
