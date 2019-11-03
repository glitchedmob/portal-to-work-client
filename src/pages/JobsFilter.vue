<template>
    <q-layout>
        <q-page-container>
            <q-page padding>
                <q-form class="text-primary">
                    <q-item>
                        <q-item-section>
                            <q-item-label>Near Me</q-item-label>
                        </q-item-section>
                        <q-item-section avatar>
                            <q-toggle
                                color="primary"
                                :value="nearby"
                                @input="updateNearby"/>
                        </q-item-section>
                    </q-item>
                    <q-item>
                        <q-input
                            class="form-item-width"
                            placeholder="Radius"
                            :value="radius"
                            @input="updateRadius"
                            suffix="mi"/>
                    </q-item>
                    <q-item>
                        <q-select
                            class="form-item-width"
                            :options="educationLevelOptions"
                            :value="educationLevel"
                            @input="updateEducationLevel"
                            label="Education Level"/>
                    </q-item>
                    <q-item>
                        <q-select
                            class="form-item-width"
                            :options="jobTypeOptions"
                            :value="jobType"
                            @input="updateJobType"
                            label="Job Type"/>
                    </q-item>
                </q-form>
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script>
    import { mapState, mapMutations } from 'vuex';

    export default {
        data: () => ({
            educationLevelOptions: [
                'High School or Equiv',
            ],

            jobTypeOptions: [
                'All',
            ],
        }),
        computed: {
            ...mapState(['nearby', 'radius', 'educationLevel', 'jobType']),
        },
        methods: {
            ...mapMutations([
                'updateNearby',
                'updateRadius',
                'updateEducationLevel',
                'updateJobType',
            ]),
        },
    };
</script>

<style scoped lang="scss">
    .form-item-width {
        width: 100%;
        font-size: 1.25em;
        padding: 5px 0px 0px 0px;
        color: $primary;
    }
</style>
