<template>
    <div class="wrapper">
        <q-layout>
            <q-page-container>
                <q-page class="q-pt-md">
                    <p><strong>Location For Job Search</strong></p>
                    <q-btn
                        class="q-px-xl q-pa-sm"
                        size="md"
                        unelevated
                        rounded
                        color="primary"
                        label="Use My Current Location"
                        @click="getLocation"
                    />
                    <h5>OR</h5>
                    <q-form class="q-px-md q-pb-lg q-gutter-md">
                        <q-input
                            outlined
                            :value="addressLine1"
                            @input="updateAddressLine1"
                            label="Street Address"
                        />
                        <q-input
                            outlined
                            :value="addressLine2"
                            @input="updateAddressLine2"
                            label="Line 2"
                        />
                        <q-input
                            outlined
                            :value="city"
                            @input="updateCity"
                            label="City"
                        />
                        <q-input
                            outlined
                            :value="state"
                            @input="updateState"
                            label="state"
                        />
                        <q-input
                            outlined
                            :value="zipCode"
                            @input="updateZipCode"
                            label="Postal Code"
                        />
                    </q-form>
                    <q-btn
                        class="q-px-xl q-pa-sm"
                        size="lg"
                        unelevated
                        rounded
                        color="primary"
                        label="Use This Address"
                    />
                </q-page>
            </q-page-container>
        </q-layout>
        <q-dialog
            v-model="locationError"
        >
            <q-card>
                <q-card-section>
                    <div class="text-h6">Whoops</div>
                </q-card-section>

                <q-card-section>
                    Looks like your browser doesn't support this feature
                </q-card-section>

                <q-card-actions align="right" class="bg-white text-teal">
                    <q-btn flat label="OK" v-close-popup/>
                </q-card-actions>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex';

    export default {
        data: () => ({
            locationError: false,
        }),
        computed: {
            ...mapState(['addressLine1', 'addressLine2', 'city', 'state', 'zipCode']),
        },
        methods: {
            ...mapMutations([
                'updateAddressLine1',
                'updateAddressLine2',
                'updateCity',
                'updateState',
                'updateZipCode',
                'updateCoordinates',
            ]),
            getLocation() {
                if ('geolocation' in navigator) {
                    navigator.geolocation.getCurrentPosition(({ coords }) => {
                        this.updateCoordinates({
                            latitude: coords.latitude,
                            longitude: coords.longitude,
                        });

                    });

                } else {
                    this.locationError = true;
                }
            },
        },
    };
</script>

<style scoped lang="scss">
    .wrapper {
        text-align: center;

        p {
            font-size: 20px;
        }
    }
</style>
