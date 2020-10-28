chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(`Hey there is this the url? ${document.URL}`)
    if(request.ask_url) {
        sendResponse({url: document.URL})
    } else {
        sendResponse({alpha: "negative"})
    }
})