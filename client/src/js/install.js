const butInstall = document.getElementById('buttonInstall');

let installPrompt;

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    window.installPrompt = event;
    butInstall.style.visibility = 'visible';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.installPrompt;
    if (promptEvent) {
        promptEvent.prompt();
        window.installPrompt = null;
        butInstall.style.visibility = 'visible';
    }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.installPrompt = null;
    console.log('App installed successfully')
});

