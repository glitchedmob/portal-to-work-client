<template>
    <div>
        <q-layout>
            <q-page-container class="row q-pt-md">
                <div class="col-2">
                    <q-icon
                        class="q-pl-lg"
                        color="primary"
                        size="md"
                        name="arrow_back"
                    />
                </div>
                <div class="col q-ml-xl">
                    <p class="text-h5 text-uppercase text-weight-medium">Job Details</p>
                </div>
            </q-page-container>
            <q-page-container>
                <q-page class="q-pa-lg">
                    <div class="row">
                        <div class="col">
                            <p class="text-h5 q-pa-none">Patient Transporter</p>
                        </div>
                        <div class="col-2 circle">
                            <q-icon
                                color="primary"
                                name="favorite"
                                size="sm"
                                class="q-pt-md q-pl-md"
                            />
                        </div>
                    </div>

                    <p class="text-subtitle1">Mercy health</p>
                    <p>Qualified candidates may be considered for any
                        open position within Patient Transportation. The
                        Patient Transporter will transport patient to and from
                        the Radiology department as assigned. Keep the
                        patient’s wheelchairs and carts clean and neat.</p>
                    <q-btn
                        outline
                        rounded
                        label="More"
                        color="primary"
                        class="q-px-lg q-py-sm"
                    />
                </q-page>

            </q-page-container>
        </q-layout>
    </div>
</template>
<script>

</script>

<style scoped lang="scss">
    .circle {
        height: 40px;
        width: 40px;
        background-color: #e9ecec;
        border-radius: 50%;
    }

</style>
