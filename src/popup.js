document.getElementById('processText').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            function: getPageText
        });
    });
});

function getPageText() {
    chrome.runtime.sendMessage({ text: document.body.innerText });
}
