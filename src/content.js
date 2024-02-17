function getPageText() {
    return document.body.innerText;
}

chrome.runtime.sendMessage({ text: getPageText() });
