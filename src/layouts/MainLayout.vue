<template>
    <q-layout view="lHh Lpr lFf">

<!--        <q-header elevated>-->
            <title-bar :title="title" :back="back"/>
<!--        </q-header>-->

        <q-page-container>
            <router-view />
            <tab-navigation/>
        </q-page-container>

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
