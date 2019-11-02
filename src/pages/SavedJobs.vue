<template>
    <div id="saved-jobs">
        <h1>Saved Jobs</h1>
        <div class="saved-jobs-page-container">
            <div class="card-container">
                <job-card></job-card>
                <job-card></job-card>
                <job-card></job-card>
            </div>
        </div>
    </div>

</template>

<script>
    import JobCard from "../components/JobCard";
    export default {
        name: 'SavedJobs',
        components: {JobCard}
    }
</script>

<style scoped lang="scss">
    #saved-jobs {
        text-align: center;

        h1 {
            font-size: 2em;
            margin: 20px;
        }
    }
    .saved-jobs-page-container {
        margin: 0 auto;
        width: 75%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        @media (max-width: 600px) {
            width: 95%
        }
    }
    .card-container {
        width: 100%;
    }
</style>
