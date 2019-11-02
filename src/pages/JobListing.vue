<template>
    <q-page-container>
        <q-page id="listing-page">
            <div class="listing-page-container">
                <ais-instant-search :search-client="searchClient" index-name="jobs">
                    <ais-search-box>
                        <div class="search-bar" slot-scope="{ currentRefinement, isSearchStalled, refine }">
                            <q-input
                                square
                                outlined
                                :value="currentRefinement"
                                @input="refine($event)"
                                placeholder="Search"
                            >
                                <q-btn flat class="search-button" icon="search"></q-btn>
                            </q-input>
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

    .search-bar {
        width: 100%;
    }

    .card-container {
        width: 100%;
    }
</style>
