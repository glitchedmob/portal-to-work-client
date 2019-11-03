<template>
    <q-page-container>
        <q-page id="listing-page">
            <div class="listing-page-container">
                <ais-instant-search :search-client="searchClient" index-name="jobs" class="full-width">
                    <ais-configure v-bind="searchParameters" />
                    <ais-search-box>
                        <div slot-scope="{ currentRefinement, isSearchStalled, refine }">
                            <div class="search-and-button q-pl-sm">
                                <q-input
                                    square
                                    outlined
                                    :value="currentRefinement"
                                    @input="refine($event)"
                                    placeholder="Search"
                                    class="search-bar"
                                >
                                    <q-btn flat class="search-button" icon="search"></q-btn>
                                </q-input>
                                <q-btn
                                    round
                                    color="primary"
                                    icon="settings"
                                    class="q-mx-sm"
                                    to="/app/jobs/filter"
                                />
                            </div>
                        </div>
                    </ais-search-box>
                    <ais-hits>
                        <template slot-scope="{ items }">
                            <q-tabs
                                v-model="tab"
                                active-color="primary"
                                indicator-color="primary"
                                align="justify"
                                class="text-primary"
                            >
                                <q-tab name="list" label="List" />
                                <q-tab name="map" label="Map" />
                            </q-tabs>
                            <q-tab-panels v-model="tab" animated>
                                <q-tab-panel name="list">
                                    <job-card
                                        v-for="item in items"
                                        :key="item.objectID"
                                        :id="item.objectID"
                                        :title="item.title"
                                        :sub-title="item.employer.name"
                                        main-icon="favorite"
                                    />
                                </q-tab-panel>
                                <q-tab-panel name="map" class="q-pa-none">
                                    <google-map :pins="mapPins(items)" @select="onMapSelect" class="map"/>
                                </q-tab-panel>
                            </q-tab-panels>
                        </template>
                    </ais-hits>
                </ais-instant-search>
            </div>
        </q-page>
    </q-page-container>
</template>

<script>
    import { mapState } from 'vuex';
    import { AisInstantSearch, AisSearchBox, AisHits, AisConfigure } from 'vue-instantsearch';
    import algoliasearch from 'algoliasearch/lite';
    import JobCard from '../components/JobCard';
    import GoogleMap from '../components/GoogleMap';

    export default {
        components: {
            JobCard,
            AisInstantSearch,
            AisSearchBox,
            AisHits,
            AisConfigure,
            GoogleMap,
        },
        data: () => ({
            searchClient: algoliasearch(
                process.env.ALGOLIA_APP_ID,
                process.env.ALGOLIA_SEARCH_KEY,
            ),
            tab: 'list',
        }),
        computed: {
            ...mapState(['coordinates']),
            searchParameters() {
                return {
                    aroundLatLng: `${this.coordinates.latitude}, ${this.coordinates.longitude}`
                }
            }
        },
        methods: {
            test(args) {
                console.log(args);
            },
            mapPins(items) {
                return items
                    .map((item, index) => item.locations.data
                        .map(location => ({
                            label: index + 1,
                            value: item.objectID,
                            lat: location.lat,
                            lng: location.lng
                        })))
                    .reduce((finalArr, locationArr) => [...finalArr, ...locationArr], [])
                    .filter(location => location.lat && location.lng);
            },
            onMapSelect(value) {
                this.$router.push(`/app/jobs/${value}`);
            },
        },
    };
</script>

<style scoped lang="scss">
    #listing-page {
        text-align: center;

        h1 {
            font-size: 2em;
            margin: 20px;
        }
    }

    .listing-page-container {
        margin: 0 auto;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        max-width: 600px;
        width: 100%;
    }

    .search-and-button {
        width: 100%;
        display: flex;
        align-items: center;
    }

    .search-bar {
        flex-grow: 2;
    }

    .map {
        width: 100vw;
        height: calc(100vh - 216px);
        margin: 0 0 -68px 0;
    }
</style>
