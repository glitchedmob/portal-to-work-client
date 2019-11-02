<template>
    <q-page-container>
        <q-page class="q-pa-lg" v-if="job">
            <p class="text-h5 text-weight-medium">{{ job.title }}</p>
            <p class="text-subtitle1">{{ job.employer.name }}</p>
            <div v-html="job.description"></div>
            <q-btn outline rounded/>
        </q-page>
    </q-page-container>
</template>
<script>
    import http from '../common/http';

    export default {
        data: () => ({
            job: null,
        }),
        created() {
            this.$q.loading.show({
                message: 'Loading job info',
            });
            const { id } = this.$route.params;

            if(!id) {
                // this.$router.push('/404');
                return;
            }

            http.get(`${process.env.JOBS_API_URL}/job/${id}`).then(res => {
                this.job = res.data.data;
                this.$q.loading.hide();
            });
        },
    };
</script>

<style scoped lang="scss">
    .col p {
        font-size: 20px;
    }
</style>
