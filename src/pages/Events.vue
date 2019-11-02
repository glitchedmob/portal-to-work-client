<template>
  <q-page q-py-md
          q-px-lg
          class="flex flex-center event-page">
      <div class="events-page-container">
          <div class="card-container">
              <event-card></event-card>
              <event-card></event-card>
              <event-card></event-card>
              <event-card></event-card>
              <event-card></event-card>
          </div>
      </div>
  </q-page>
</template>

<script>
    import EventCard from "../components/EventCard"
    export default {
        name: 'Events',
        components: {EventCard}
    }
</script>

<style scoped lang="scss">
    .card-container {
        width: 100%;
    }
    .event-page {
        background-color: lighten($primary, 50%);
    }
    .events-page-container {
        width: 75%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        @media (max-width: 600px) {
            width: 99%
        }
    }
</style>
