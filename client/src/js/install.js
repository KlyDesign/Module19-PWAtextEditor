const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.style.visibility = 'visible';
    //combined seperated on accident went back to initial commit 
    butInstall.addEventListener('click', async () => {
    if(butInstall.style.visibility !== 'hidden' ){
        butInstall.style.visibility = 'hidden';
    }else {
        return;
    }
});})

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {});
