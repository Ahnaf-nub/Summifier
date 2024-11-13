let isTransformed = false;

// Sends a message to the content script to start transforming or reverting text
document.getElementById('insult-button').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            files: ['content.js']
        }, () => {
            chrome.tabs.sendMessage(tabs[0].id, { action: isTransformed ? 'revert' : 'transform' });
            isTransformed = !isTransformed;
        });
    });
});
