<template>
    <div id="q-app">
        <router-view/>
    </div>
</template>

<script>
    import axios from 'axios';
    import { mapMutations } from 'vuex';
    import { setup } from './common/onesignal';

    export default {
        name: 'App',
        beforeCreate() {
            this.initialiseStore();

            setup().then((userId) => {
                this.updateUserId(userId);
            });
        },
        methods: {
            ...mapMutations(['initializeStore', 'updateUserId']),
        },
    };
</script>
