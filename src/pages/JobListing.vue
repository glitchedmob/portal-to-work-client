<template>
    <q-page id="listing-page">
        <div class="listing-page-container">
            <div class="search-bar" style="max-width: 300px">
                <q-input square outlined v-model="text" placeholder="Search" value="">
                    <q-btn flat class="search-button" icon="search"></q-btn>
                </q-input>
            </div>

            <div class="card-container">

                <job-card></job-card>
                <job-card></job-card>
                <job-card></job-card>
                <job-card></job-card>
                <job-card></job-card>
                <job-card></job-card>

            </div>
        </div>
    </q-page>
</template>

<script>
    import JobCard from "../components/JobCard";

    export default {
        components: {JobCard},
        data () {
            return {
                text: ''
            }
        }
    }
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
        margin: 0 25px 25px 25px;
    }
    .card-container {
        width: 100%;
    }
</style>
