<template>
    <div id="q-app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App',
        beforeCreate() {
            this.$store.commit('initialiseStore');
        }
    };
</script>
