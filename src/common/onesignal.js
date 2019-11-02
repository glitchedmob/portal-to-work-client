import { Platform } from 'quasar';
import { loadScript } from './helpers';

export async function setup() {
    if (window === undefined) return;

    const isLocalHost = ['localhost', '127.0.0.1', ''].includes(window.location.hostname);

    if (Platform.is.cordova || Platform.is.capacitor) {
        return;
    }

    await loadScript('https://cdn.onesignal.com/sdks/OneSignalSDK.js');

    const OneSignal = await loadOneSignal();

    console.log(OneSignal);

    OneSignal.init({
        appId: process.env.ONESIGNAL_APP_ID,
    });

    const userId = await OneSignal.getUserId();

    console.log(`userId: ${userId}`);
}

function loadOneSignal() {
    return new Promise((resolve, reject) => {
        const OneSignal = window.OneSignal || [];

        OneSignal.push(() => {
            resolve(OneSignal);
        });
    });
}
