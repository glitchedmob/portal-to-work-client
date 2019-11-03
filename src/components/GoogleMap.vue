<template>
    <div id="map" ref="map">
    </div>
</template>

<script>
    import {googleMaps} from '../common/google-maps';

    export default {
        name: "GoogleMap",
        google: null,
        map: null,
        markers: [],
        data() {
            return {};
        },
        props: {
            pins: {
                type: Array,
                default: () => ([]),
            }
        },
        async mounted() {
            this.$options.google = await googleMaps();
            this.initMap();
        },
        methods: {
            initMap() {
                const {google} = this.$options;

                this.$options.map = new google.maps.Map(this.$refs.map, {
                    center: {lat: -34.397, lng: 150.644},
                    zoom: 10,
                    disableDefaultUI: true,
                });

                this.drawPins();
            },
            drawPins() {
                const {google, map} = this.$options;

                this.$options.markers.forEach(marker => {
                    marker.setMap(null);
                });

                const bounds = new google.maps.LatLngBounds();

                this.$options.markers = this.pins.map(pin => {
                    const marker = new google.maps.Marker({
                        position: {
                            lat: pin.lat,
                            lng: pin.lng,
                        },
                        map,
                    });

                    bounds.extend(marker.getPosition());

                    return marker;
                });

                map.fitBounds(bounds);
            }
        },
        watch: {
            pins() {
                this.drawPins();
            }
        }
    }
</script>

<style scoped lang="scss">
    #map {
        height: 200px;
        width: 100%
    }
</style>
