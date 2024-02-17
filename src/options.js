// Save the API key when the form is submitted
document.getElementById('options-form').addEventListener('submit', function(event) {
	event.preventDefault();
	const apiKey = document.getElementById('api-key').value;
	chrome.storage.sync.set({ 'apiKey': apiKey }, function() {
	console.log('API Key saved');
	});
});

// Load the API key when the options page is opened
document.addEventListener('DOMContentLoaded', function() {
	chrome.storage.sync.get('apiKey', function(data) {
	document.getElementById('api-key').value = data.apiKey || '';
	});
});
