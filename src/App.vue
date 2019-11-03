<template>
    <div id="q-app">
        <router-view/>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    import { setup } from './common/onesignal';

    export default {
        name: 'App',
        created() {
            this.initialiseStore();

            setup().then((userId) => {
                this.updateUserId(userId);
            });
        },
        methods: {
            ...mapMutations(['initialiseStore', 'updateUserId']),
        },
    };
</script>
