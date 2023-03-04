const butInstall = document.getElementById('buttonInstall');
// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.style.visibility = 'visible';
});

butInstall.addEventListener('click', async () => {
    if (butInstall.style.visibility = 'visible') {
        butInstall.style.visibility = 'hidden';
        appInstalled();
    }else{
        console.log('No events here my guy');
        return
    }
    function appInstalled () {
        console.log('App installed');
        alert('App installed')
        document.getElementById('status').innerText = '///   App Installed';
    }
});



// window.addEventListener('appinstalled', (event) => {
//     window.deferredPrompt = null;
//     console.log('App installed', event)
// });