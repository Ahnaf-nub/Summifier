// Shakespearean insults list
const shakespeareanInsults = [
    "thou pribbling ill-nurtured knave",
    "thou spongy hasty-witted clotpole",
    "thou gleeking flap-mouthed miscreant",
    "thou warped unchin-snouted strumpet",
    "thou errant toad-spotted boar-pig",
    "thou fobbing ill-breeding canker-blossom",
    "thou frothy pox-marked miscreant",
    "thou dankish onion-eyed maggot-pie",
    "thou churlish boil-brained knave",
    "thou beslubbering hedge-born scullion"
];
  
// Mapping certain modern phrases to insults
const insultMapping = {
    "error": "pribbling ill-nurtured knave",
    "login": "beetle-headed flap-dragon",
    "submit": "errant rump-fed puttock",
    "welcome": "thou jarring half-faced barnacle"
};
  
// Random insult generator
function randomInsult() {
    return shakespeareanInsults[Math.floor(Math.random() * shakespeareanInsults.length)];
}
  
// Function to replace text nodes
function replaceTextWithInsults(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        let text = node.textContent;
        
        // Replace specific phrases
        for (const [key, insult] of Object.entries(insultMapping)) {
            if (text.toLowerCase().includes(key)) {
                text = text.replace(new RegExp(key, 'gi'), insult);
            }
        }
        
        // Randomly insult remaining text
        if (Math.random() > 0.5) {
            text = text.split(" ").map(word => Math.random() > 0.7 ? randomInsult() : word).join(" ");
        }
  
        node.textContent = text;
    } else {
        node.childNodes.forEach(replaceTextWithInsults);
    }
}
  
// Listen for messages from the popup script
chrome.runtime.onMessage.addListener((request) => {
    if (request.action === 'transform') {
        replaceTextWithInsults(document.body);
    } else if (request.action === 'revert') {
        location.reload(); // Reload the page to remove insults
    }
});

// Function to highlight insults
function highlightInsults(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        let text = node.textContent;
        for (const insult of shakespeareanInsults) {
            const regex = new RegExp(insult, 'gi');
            text = text.replace(regex, `<span class="highlight">${insult}</span>`);
        }
        const span = document.createElement('span');
        span.innerHTML = text;
        node.replaceWith(span);
    } else {
        node.childNodes.forEach(highlightInsults);
    }
}

// Add CSS for highlighted insults
const style = document.createElement('style');
style.textContent = `
    .highlight {
        background-color: black;
        font-weight: bold;
    }
`;
document.head.appendChild(style);

// Apply highlight to the page body
highlightInsults(document.body);

// Add toggle button to the page
addToggleButton();