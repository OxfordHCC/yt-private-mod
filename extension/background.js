function action() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {action: "run"}, function(response) {});  
    });
}

browser.browserAction.onClicked.addListener(action);