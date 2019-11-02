export function loadScript(url) {
    return new Promise((resolve, reject) => {
        const head = document.getElementsByTagName('head')[0];
        const script = document.createElement('script');
        script.type = 'text/javascript';

        script.onload = () => {
            resolve();
        };

        script.src = url;
        head.appendChild(script);
    });
}
