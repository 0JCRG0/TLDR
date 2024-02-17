chrome.runtime.onMessage.addListener((request) => {
    chrome.storage.sync.get('apiKey', function(data) {
        const api_key = data.apiKey;
        if (api_key) {
            const axios = require('axios'); // You'll need to bundle this with your extension or use fetch API

            axios.post('https://api.together.xyz/v1/chat/completions', {
            "model": "mistralai/Mistral-7B-Instruct-v0.1",
            // ... other parameters as in your example
            "prompt": `<s>[INST] ${request.text} [/INST]`,
            }, {
            headers: {
                Authorization: `Bearer ${api_key}`
            }    
            }).then((response) => {
            console.log(response);
            }, (error) => {
            console.error(error);
            });

        } else {
            console.error('API key is not set.');
        }
        });
    });

