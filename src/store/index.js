import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default function (/* { ssrContext } */) {

    const Store = new Vuex.Store({
        state: {
            userId: null,
            addressLine1: '',
            addressLine2: '',
            city: '',
            state: '',
            zipCode: '',
            coordinates: {
                latitude: '',
                longitude: '',
            },
        },
        mutations: {
            initialiseStore(state) {
                if (window === undefined) return;

                if (localStorage.getItem('store')) {
                    this.replaceState(
                        Object.assign(state, JSON.parse(localStorage.getItem('store'))),
                    );
                }
            },
            updateAddressLine1(state, value) {
                state.addressLine1 = value;
            },
            updateAddressLine2(state, value) {
                state.addressLine2 = value;
            },
            updateCity(state, value) {
                state.city = value;
            },
            updateState(state, value) {
                state.state = value;
            },
            updateZipCode(state, value) {
                state.zipCode = value;
            },
            updateCoordinates(state, { latitude, longitude }) {
                state.coordinates.latitude = latitude;
                state.coordinates.longitude = longitude;
            },
            updateUserId(state, value) {
                state.userId = value;
            },
        },
        getters: {},
        actions: {
            async register({ commit, state }, coordinates) {
                commit('updateCoordinates', coordinates);

                if (!state.userId) return;

                await axios.post(`${process.env.PORTAL_TO_WORK_URL}/device/register`, {
                    playerId: state.userId,
                    lat: coordinates.latitude,
                    lng: coordinates.longitude
                });
            }
        },

        // enable strict mode (adds overhead!)
        // for dev mode only
        strict: process.env.DEV,
    });

    Store.subscribe((mutation, state) => {
        if (window === undefined) return;

        localStorage.setItem('store', JSON.stringify(state));
    });

    return Store;
}
