<template>
    <div class="wrapper">
        <q-layout>
            <q-page-container>
                <q-page class="q-pt-md">
                    <p><strong>Location For Job Search</strong></p>
                    <q-btn
                        class="q-px-xl q-pa-sm"
                        size="md"
                        unelevated
                        rounded
                        color="primary"
                        label="Use My Current Location"
                    />
                    <h5>OR</h5>
                    <q-form class="q-px-md q-pb-lg q-gutter-md">
                        <q-input outlined v-model="text" label="Street Address" />
                        <q-input outlined v-model="text" label="Line 2" />
                        <q-input outlined v-model="text" label="City" />
                        <q-input outlined v-model="text" label="state" />
                        <q-input outlined v-model="text" label="Postal Code" />
                    </q-form>
                    <q-btn
                        class="q-px-xl q-pa-sm"
                        size="lg"
                        unelevated
                        rounded
                        color="primary"
                        label="Use This Address"
                    />
                </q-page>
            </q-page-container>
        </q-layout>

    </div>
</template>
<script>

</script>
<style scoped lang="scss">
    .wrapper{
        text-align: center;
        p {
            font-size: 20px;
        }
    }
</style>
