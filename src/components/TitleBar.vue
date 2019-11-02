<template>
    <div class="row q-pt-md">
        <div class="col-2">
            <q-icon
                v-if="back != null"
                class="q-ml-md"
                color="primary"
                size="md"
                name="arrow_back"
                @click="goBack"
            />
        </div>
        <div class="col q-mr-xl text-center">
            <p class="text-h6 text-uppercase text-weight-medium">{{ title }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TitleBarBackButton.vue",
        props: ['title', 'back'],
        methods: {
            goBack() {
                this.$router.push(this.back);
            }
        }
    }
</script>

<style scoped>

</style>
