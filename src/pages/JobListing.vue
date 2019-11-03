<template>
    <q-page-container>
        <q-page id="listing-page">
            <div class="listing-page-container">
                <ais-instant-search :search-client="searchClient" index-name="jobs" >
                    <ais-configure v-bind="searchParameters" />
                    <ais-search-box>
                        <div slot-scope="{ currentRefinement, isSearchStalled, refine }">
                            <div class="search-and-button">
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
                                <q-tab-panel name="map">
                                    <job-card
                                        v-for="item in items"
                                        :key="item.objectID"
                                        :id="item.objectID"
                                        :title="item.title"
                                        :sub-title="item.employer.name"
                                        main-icon="favorite"
                                    />
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

    export default {
        components: {
            JobCard,
            AisInstantSearch,
            AisSearchBox,
            AisHits,
            AisConfigure,
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
        },
    };
</script>

<style lang="scss">
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
    }

    .search-and-button {
        width: 100%;
        display: flex;
        align-items: center;
    }

    .search-bar {
        flex-grow: 2;
    }
</style>
