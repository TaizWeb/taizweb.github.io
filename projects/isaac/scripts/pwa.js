// Register service worker to control making site work offline

if ('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('/projects/isaac/sw.js')
		.then(() => { console.log('Service Worker Registered'); });
}

let deferredPrompt;
const addBtn = document.querySelector('.add-button');

// Code to check if the app's isntalled, if so, hide the install button
if ('getInstalledRelatedApps' in window.navigator) {
	let relatedApps = await window.navigator.getInstalledRelatedApps();
	if (relatedApps.length > 0) {
		addBtn.style.display = "none";
	}
}
// Code to handle install prompt on desktop


window.addEventListener('beforeinstallprompt', (e) => {
	// Prevent Chrome 67 and earlier from automatically showing the prompt
	e.preventDefault();
	// Stash the event so it can be triggered later.
	deferredPrompt = e;
	// Update UI to notify the user they can add to home screen
	addBtn.style.display = 'block';

		addBtn.addEventListener('click', () => {
		addBtn.style.display = 'none';
		// Show the prompt
		deferredPrompt.prompt();
		// Wait for the user to respond to the prompt
		deferredPrompt.userChoice.then((choiceResult) => {
		if (choiceResult.outcome === 'accepted') {
			console.log('User accepted the install prompt');
		} else {
			console.log('User dismissed the install prompt');
		}
		deferredPrompt = null;
		});
	});
});
