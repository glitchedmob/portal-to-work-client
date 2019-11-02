<template>
    <q-layout class="row q-pt-md">
        <div class="col-2">
            <q-icon
                v-if="back != null"
                class="q-ml-md"
                color="primary"
                size="md"
                name="arrow_back"
                :v-go-back="back"
            />
        </div>
        <div class="col q-mr-xl text-center">
            <p class="text-h5 text-uppercase text-weight-medium">{{ title }}</p>
        </div>
    </q-layout>
</template>

<script>
    export default {
        name: "TitleBarBackButton.vue",
        props: ['title', 'back'],
    }
</script>

<style scoped>

</style>
