<template>
    <div id="map" ref="map">
    </div>
</template>

<script>
    import { googleMaps } from '../common/google-maps';

    import * as blueCircle from '../assets/dot.png';
    import googleMapsStyle from '../common/google-map-style';

    export default {
        name: 'GoogleMap',
        google: null,
        map: null,
        icon: null,
        markers: [],
        data() {
            return {};
        },
        props: {
            pins: {
                type: Array,
                default: () => ([]),
            },
        },
        async mounted() {
            this.$options.google = await googleMaps();
            this.initMap();
        },
        methods: {
            initMap() {
                const { google } = this.$options;

                this.$options.map = new google.maps.Map(this.$refs.map, {
                    center: { lat: -34.397, lng: 150.644 },
                    zoom: 10,
                    disableDefaultUI: true,
                    styles: googleMapsStyle,
                });

                this.$options.icon = {
                    url: blueCircle,
                    size: new google.maps.Size(30, 30),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(0, 0),
                };

                this.drawPins();
            },
            drawPins() {
                const { google, map } = this.$options;

                this.$options.markers.forEach(marker => {
                    marker.setMap(null);
                    marker = null;
                });

                const bounds = new google.maps.LatLngBounds();

                this.$options.markers = this.pins.map(pin => {
                    console.log(pin.label);
                    const marker = new google.maps.Marker({
                        position: {
                            lat: pin.lat,
                            lng: pin.lng,
                        },
                        icon: this.$options.icon,
                        label: {
                            text: `${pin.label}`,
                            color: 'white',
                            fontWeight: 'bold',
                        },
                        map,
                    });

                    marker.addListener('click', () => {
                        this.$emit('select', pin.value);
                    });

                    bounds.extend(marker.getPosition());

                    return marker;
                });

                map.fitBounds(bounds);
            },
        },
        watch: {
            pins() {
                this.drawPins();
            },
        },
    };
</script>

<style scoped lang="scss">
    #map {
        width: 100%
    }
</style>
