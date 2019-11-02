<template>
    <q-layout view="lHh Lpr lFf">
        <title-bar :title="title" :back="back"/>
        <router-view />
        <tab-navigation/>
    </q-layout>
</template>

<script>
    import TabNavigation from "../components/TabNavigation";
    import TitleBar from '../components/TitleBar'

    export default {
        name: 'MyLayout',
        components: {
            TabNavigation,
            TitleBar,
        },
        computed: {
            title() {
                return this.$route.meta.title;
            },
            back() {
                return this.$route.meta.back;
            },
        },
    }
</script>
