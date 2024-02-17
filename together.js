const axios = require('axios')
axios.post('https://api.together.xyz/v1/chat/completions', {
"model": "mistralai/Mistral-7B-Instruct-v0.1",
"max_tokens": 512,
"prompt": "<s>[INST] WHO ARE YOU [/INST]",
"temperature": 0.7,
"top_p": 0.7,
"top_k": 50,
"repetition_penalty": 1,
"stream_tokens": true,
"stop": [
	"[/INST]",
	"</s>"
],
"repetitive_penalty": 1,
}, {
headers: {
	Authorization: 'Bearer api_key'
}    
}).then((response) => {
console.log(response);
}, (error) => {
console.log(error);
});