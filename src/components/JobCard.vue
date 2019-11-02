<template>
    <q-card flat square class="listing-card">
        <q-item clickable>
            <q-item-section class="card-avatar">
                <q-icon name="favorite"></q-icon>
            </q-item-section>
            <q-item-section class="card-text">
                <q-item-label class="card-title">Job Title</q-item-label>
                <q-item-label caption class="card-employer">Employer</q-item-label>
            </q-item-section>
            <q-item-section class="card-icons">
                <div class="icon">
                    <q-icon name="directions_walk"></q-icon>
                    <p>5 min</p>
                </div>
                <div class="icon">
                    <q-icon name="directions_bus"></q-icon>
                    <p>2 min</p>
                </div>
            </q-item-section>
        </q-item>
    </q-card>
</template>

<script>
    export default {
        name: "JobCard"
    }
</script>

<style scoped lang="scss">
    .listing-card {
        margin: 25px;
        background-color: lighten($primary, 50%);
    }
    .card-avatar {
        align-content: center;
        flex-grow: 1;
        font-size: 7em;
        color: $primary;

        @media (max-width: 500px) {
            flex-grow: .5;
            font-size: 3em;
        }
    }
    .card-text {
        text-align: left;
        flex-grow: 2;

        @media (max-width: 600px) {
            flex-grow: 1;
        }
    }
    .card-title {
        font-size: 2em;

        @media (max-width: 500px) {
            font-size: 1.5em;
        }
    }
    .card-employer {
        font-size: 1.5em;

        @media (max-width: 500px) {
            font-size: 1em;
        }
    }
    .card-icons {
        color: $primary;
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        font-size: 2.5em;

        .icon {
            margin: 5px 10px;
        }

        p {
            font-size: .5em;
        }

        @media (max-width: 825px) {
            font-size: 2.5em;

            .icon {
                margin: 3px 3px;
            }

            p {
                font-size: .25em;
            }
        }
    }
</style>
