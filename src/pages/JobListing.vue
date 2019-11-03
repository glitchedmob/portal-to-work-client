<template>
    <q-page-container>
        <q-page id="listing-page">
            <div class="listing-page-container">
                <ais-instant-search :search-client="searchClient" index-name="jobs">
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
                            <job-card
                                v-for="item in items"
                                :key="item.objectID"
                                :id="item.objectID"
                                :title="item.title"
                                :sub-title="item.employer.name"
                                main-icon="favorite"
                                walking-distance="5 min"
                                busing-distance="10 min"
                            />
                        </template>
                    </ais-hits>
                </ais-instant-search>
            </div>
        </q-page>
    </q-page-container>
</template>

<script>
    import { AisInstantSearch, AisSearchBox, AisHits } from 'vue-instantsearch';
    import algoliasearch from 'algoliasearch/lite';
    import JobCard from '../components/JobCard';

    export default {
        components: {
            JobCard,
            AisInstantSearch,
            AisSearchBox,
            AisHits,
        },
        data: () => ({
            searchClient: algoliasearch(
                process.env.ALGOLIA_APP_ID,
                process.env.ALGOLIA_SEARCH_KEY,
            ),
        }),
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
        width: 75%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        @media (max-width: 600px) {
            width: 95%
        }
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
