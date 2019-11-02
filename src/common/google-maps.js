import GoogleMapsLoader from 'google-maps';

let googleMapsReference = null;

export function googleMaps() {
    return new Promise((resolve, reject) => {
        if (googleMapsReference != null) {
            return resolve(googleMapsReference);
        }

        GoogleMapsLoader.KEY = process.env.GOOGLE_MAPS_API_KEY;
        GoogleMapsLoader.VERSION = 'weekly';

        GoogleMapsLoader.load(google => {
            googleMapsReference = google;
            return resolve(googleMapsReference);
        });
    });
}
