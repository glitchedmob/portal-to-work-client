<template>
    <div id="q-app">
        <router-view/>
    </div>
</template>

<script>
    import { setup } from './common/onesignal';

    export default {
        name: 'App',
        beforeCreate() {
            setup();
            this.$store.commit('initialiseStore');
        },
    };
</script>
